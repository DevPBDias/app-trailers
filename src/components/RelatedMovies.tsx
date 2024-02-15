import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import { PlatContainer, TiltePlatform, ImageMovie } from '../styles/PlatformCardMoviesStyles'
import { MovieContext } from '../context/MoviesContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

type RelatedProps = {
  data: any,
}

function RelatedMovies({ data }: RelatedProps) {
  const [relatedMovies, setRelatedMovies] = useState<any>([])
  const { movies } = useContext(MovieContext)

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    afterChange: function(index: any) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };

  async function getRelatedMovies() {
    const moviesInCategory = await movies.filter((elem: any) => elem.type === data)
    setRelatedMovies(moviesInCategory);
  }

  useEffect(() => {
    getRelatedMovies()
  }, [movies])

  return (
    <>
      {
        relatedMovies  && (
          <PlatContainer>
            <TiltePlatform>Relacionados</TiltePlatform>
            <div className='div-plat'>
              <Slider {...settings}>
                {
                  relatedMovies?.map((elem: any, index: number) => (
                      <Link key={index} className='link' to={`/movie/${elem._id}`}>
                        <ImageMovie src={elem.image} alt={`movie img ${index}`} />
                      </Link>
                  ))
                }
                </Slider>
            </div>
          </PlatContainer>
        )
      }
    </>
  )
}

export default RelatedMovies