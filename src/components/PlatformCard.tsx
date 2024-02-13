import { Link } from 'react-router-dom'
import { PlatContainer, TiltePlatform, ImageMovie } from '../styles/PlatformCardMoviesStyles'
import { IMovieData } from '../types'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

type ICardProps = {
  data: IMovieData[],
  name: string,
}

function PlatformCard({ data, name }: ICardProps) {
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

  return (
    <>
      {
        data && (
          <PlatContainer>
            <TiltePlatform>{name}</TiltePlatform>
            <div className='div-plat'>
              <Slider {...settings}>
                {
                  data?.map((elem: any, index: number) => (

                      <Link className='link' to={`/movie/${elem._id}`}>
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

export default PlatformCard