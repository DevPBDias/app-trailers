import { data } from '../data/moviesData';

function FavoriteCardHome() {
  return (
    <section>
      <h3>Meus favoritos</h3>
      {
            data && data.map((elem, index) => (
              <section key={ index }>
                <div>
                  <img src={ elem.image } alt="" />
                </div>
                <div>
                  <h4>{elem.name}</h4>
                  <span>{elem.company}</span>
                  <button>
                    Trailer
                  </button>
                </div>
              </section>
            ))
        }
    </section>
  );
}

export default FavoriteCardHome;
