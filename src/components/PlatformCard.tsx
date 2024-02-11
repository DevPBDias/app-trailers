import { Link } from 'react-router-dom'
import { PlatContainer, MoviesContainer, TiltePlatform } from '../styles/PlatformCardMoviesStyles'
import { IMovieData } from '../types'
import Loading from './Loading'

type ICardProps = {
    data: IMovieData[],
    name: string,
}

function PlatformCard({data, name }: ICardProps) {
  return (
    <>
      {
        data.length === 0 ? <Loading /> : (
          <PlatContainer>
          <TiltePlatform>{name}</TiltePlatform>
          <div className='div-plat'>
          {
            data && data?.map((elem: any, index: number) => (
              <MoviesContainer key={index}>
                <Link to={`/movie/${elem._id}`}>
                  <img src={ elem.image } alt={ `movie img ${index}` } />
                </Link>
              </MoviesContainer>
              ))
            }
            </div>
          </PlatContainer>
        )
      }
    </>
  )
}

export default PlatformCard