import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useMemo, useState } from "react";
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
  updatingFavorites: (movie: any) => void,
  updatingRelatedMovies: (movie: any) => any
}

interface MoviesProviderProps {
  children: ReactNode,
}

export const MovieContext = createContext({} as any);

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

    if (!searchFav) {
      updatedFavorites.push(movie);
    } else {
      const filteredData = updatedFavorites.filter((elem: any) => elem._id !== movie._id)
      updatedFavorites = filteredData
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  const updatingRelatedMovies = (id: any) => {
    const moviesInCategory = movies.filter((elem: any) => elem.type === id)
    return moviesInCategory
  };

  useEffect(() => {
    savingData();
  }, [])

  const contextValue = {
    movies,
    setMovies,
    moviesType,
    animesType,
    seriesType,
    newMovies,
    hbo,
    updatingFavorites,
    crunchy,
    netflix,
    disney,
    favorites,
    setFavorites,
    updatingRelatedMovies
  };

  const contextMemo = useMemo(() => (contextValue), [
    movies,
    moviesType,
    animesType,
    seriesType,
    newMovies,
    hbo,
    crunchy,
    netflix,
    disney,
    favorites,
  ]);


  return (
    <MovieContext.Provider value={contextMemo}>
      {children}
    </MovieContext.Provider>
  );
}