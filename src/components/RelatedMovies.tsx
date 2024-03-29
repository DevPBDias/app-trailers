import { Link } from 'react-router-dom'
import { PlatContainer, TiltePlatform, ImageMovie } from '../styles/PlatformCardMoviesStyles'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import useFetch from '../hooks/useFetch';
import Loading from './Loading';

function RelatedMovies({ type }: any) {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    afterChange: function (index: any) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };

  const { data, isPending } = useFetch('http://localhost:3004/movie')

  const RelatedData = data?.filter((movie: any) => movie.type === type)

  return (
    <>
      {
        isPending ? <Loading /> : (
          <PlatContainer>
            <TiltePlatform>Relacionados</TiltePlatform>
            <div className='div-plat'>
              <Slider {...settings}>
                {
                  RelatedData && RelatedData.map((elem: any, index: number) => (
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