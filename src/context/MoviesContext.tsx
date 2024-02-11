import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";
import { getMoviesData } from "../services/movieService";

interface IMovieContextType {
  movies: any,
  setMovies: Dispatch<SetStateAction<any>>,
  hbo: any, 
  disney: any,
  netflix: any,
  crunchy: any,
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

  async function savingData() {
    const { data } = await getMoviesData();
    const getDisney = await data.filter((elem: any) => elem.platform === 'Disney+')
    const getHBO = await data.filter((elem: any) => elem.platform === 'HBO Max')
    const getCrunchy = await data.filter((elem: any) => elem.platform === 'Crunchyroll')
    const getNetflix= await data.filter((elem: any) => elem.platform === 'Netflix')
    setMovies(data)
    setDisney(getDisney)
    setHBO(getHBO)
    setNetflix(getNetflix)
    setCrunchy(getCrunchy)
  }

  useEffect(() => {
    savingData();
  }, [])

  return (
    <MovieContext.Provider value={{ movies, setMovies, hbo, crunchy, netflix, disney }}>
      {children}
    </MovieContext.Provider>
  );
}