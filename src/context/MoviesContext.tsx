import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";
import { getMoviesData } from "../services/movieService";

interface IMovieContextType {
  movies: any,
  setMovies: Dispatch<SetStateAction<any>>,
  hbo: any,
  disney: any,
  netflix: any,
  crunchy: any,
  newMovies: any
  moviesType: any,
  animesType: any,
  seriesType: any,
  favorites: any,
  setFavorites: Dispatch<SetStateAction<any>>,
  updatingFavorites: (movie: any) => void
}

interface MoviesProviderProps {
  children: ReactNode,
}

export const MovieContext = createContext({} as IMovieContextType);

export default function MoviesProvider({ children }: MoviesProviderProps) {
  const [movies, setMovies] = useState<any>([]);
  const [disney, setDisney] = useState<any>([])
  const [hbo, setHBO] = useState<any>([])
  const [netflix, setNetflix] = useState<any>([])
  const [crunchy, setCrunchy] = useState<any>([])
  const [newMovies, setNewMovies] = useState<any>([])
  const [moviesType, setMovieType] = useState<any>([])
  const [animesType, setAnimeType] = useState<any>([])
  const [seriesType, setSerieType] = useState<any>([])
  const [favorites, setFavorites] = useState<any>([])

  async function savingData() {
    const { data } = await getMoviesData();
    const getDisney = await data.filter((elem: any) => elem.platform === 'Disney+')
    const getHBO = await data.filter((elem: any) => elem.platform === 'HBO Max')
    const getCrunchy = await data.filter((elem: any) => elem.platform === 'Crunchyroll')
    const getNetflix = await data.filter((elem: any) => elem.platform === 'Netflix')
    const lastestMovies = await data.filter((elem: any) => Number(elem.year) >= 2023)
    const seriesData = await data.filter((elem: any) => elem.type === 'Série')
    const animesData = await data.filter((elem: any) => elem.type === 'Anime')
    const moviesData = await data.filter((elem: any) => elem.type === 'Filme')
    setMovies(data)
    setDisney(getDisney)
    setHBO(getHBO)
    setNetflix(getNetflix)
    setCrunchy(getCrunchy)
    setNewMovies(lastestMovies)
    setMovieType(moviesData)
    setAnimeType(animesData)
    setSerieType(seriesData)
  }

  const updatingFavorites = (movie: any) => {
    let updatedFavorites = [...favorites];
    const searchFav = updatedFavorites.some((elem: any) => elem._id === movie._id)
    
    if (searchFav) {
      const newFav = updatedFavorites.filter((elem: any) => elem._id == !movie._id)
      updatedFavorites = newFav
    } else {
      updatedFavorites.push(movie);
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  useEffect(() => {
    savingData();
  }, [])

  return (
    <MovieContext.Provider value={{
      movies, setMovies, moviesType,
      animesType, seriesType, newMovies, hbo, updatingFavorites,
      crunchy, netflix, disney, favorites, setFavorites
    }}>
      {children}
    </MovieContext.Provider>
  );
}