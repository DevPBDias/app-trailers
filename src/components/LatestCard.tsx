import { useContext } from 'react';
import { ContainerSlide, ImgMovie, Title } from '../styles/LatestCardStyles';
import { MovieContext } from '../context/MoviesContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';

function LatestCard() {
  const { newMovies } = useContext(MovieContext);

  return (
    <ContainerSlide>
      <Title>Destaques</Title>
      <Swiper
        modules={[EffectFade]}
        effect='fade'
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        {
          newMovies && (
            newMovies.map((movie: any) => (
              <SwiperSlide key={movie.name}>
                <Link to={`/movie/${movie._id}`}>
                  <ImgMovie
                    src={movie.image}
                    alt={`${movie.name} image`} />
                </Link>
              </SwiperSlide>
            ))
          )
        }
      </Swiper>
    </ContainerSlide>
  );
}

export default LatestCard;
