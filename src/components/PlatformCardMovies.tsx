import { movieData } from '../data/moviesData';

function PlatformCardMovies() {
  return (
    <section>
      {
            movieData && movieData.map((elem, index) => (
              <div key={ index }>
                <h3>{elem.platform}</h3>
                <div>
                  {elem.movies.map((movies, indexMovie) => (
                    <img
                      key={ indexMovie }
                      src={ movies }
                      alt={ `movie img ${indexMovie}` }
                    />
                  ))}
                </div>
              </div>
            ))
        }
    </section>
  );
}

export default PlatformCardMovies;
