import { Link } from 'react-router-dom'
import { PlatContainer, TiltePlatform, ImageMovie } from '../styles/PlatformCardMoviesStyles'
import { IMovieData } from '../types'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useEffect, useState } from 'react';

type ICardProps = {
  data: IMovieData[],
  name: string,
}

function CategoryCard({ data, name }: ICardProps) {
    const [ok, setOk] = useState<any>([])

  const settings = {
    className: "center",
    infinite: ok.length < 3 ? false : true,
    centerPadding: "60px",
    slidesToShow: ok.length < 3 ? ok.length : 3,
    swipeToSlide: true,
    afterChange: function(index: any) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };

  const selectType = async () => {
    const okdata = await data.filter((item: any) => item.category === name)
    setOk(okdata)
  }

  useEffect(() => {
    selectType();
  }, [])

  return (
    <>
      {
        data && (
          <PlatContainer>
            <TiltePlatform>{name}</TiltePlatform>
            <div className='div-plat'>
              <Slider {...settings}>
                {
                  ok?.map((elem: any, index: number) => (
                      <Link key={index} className='link' to={`/movie/${elem._id}`}>
                        <ImageMovie src={ elem.image } alt={`movie img ${index}`} />
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

export default CategoryCard