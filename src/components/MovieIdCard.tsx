import { data } from '../data/moviesData';
import { CardContainer, Content, ImgContainer,
  TextContainer } from '../styles/MovieIdStyles';
import movieIdImg from '../assets/movieIdImg.png';

function MovieIdCard() {
  return (
    <CardContainer>
      {
            data && (
              <Content>
                <ImgContainer>
                  <img src={ movieIdImg } alt="movie img" />
                </ImgContainer>
                <TextContainer>
                  <h4>{ data[0].name }</h4>
                  <p>{ data[0].type }</p>
                  <div className="info">
                    <span>{ data[0].year }</span>
                    <span>{ data[0].director }</span>
                    <span>{ data[0].company }</span>
                  </div>
                  <span>{ data[0].actors }</span>
                </TextContainer>
              </Content>

            )
        }
    </CardContainer>
  );
}

export default MovieIdCard;
