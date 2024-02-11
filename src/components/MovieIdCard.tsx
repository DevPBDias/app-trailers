import { CardContainer, Content, ImgContainer,
  TextContainer } from '../styles/MovieIdStyles';

function MovieIdCard({ data }: any) {
  return (
    <CardContainer>
      {
            data && (
              <Content>
                <ImgContainer>
                  <img src={ data.image } alt="movie img" />
                </ImgContainer>
                <TextContainer>
                  <h4>{ data.name }</h4>
                  <p>{ data.category }</p>
                  <div className="info">
                    <span>{ data.year }</span>
                    <span>{ data.director }</span>
                    <span>{ data.company }</span>
                  </div>
                  <span>{ data.actors }</span>
                </TextContainer>
              </Content>

            )
        }
    </CardContainer>
  );
}

export default MovieIdCard;
