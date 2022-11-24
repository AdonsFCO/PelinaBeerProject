import { useParams } from "react-router-dom";
import { useGetSingleMovie } from "../../setup/APICaller/APICaller";
import "./SingleMovieLayout.css";
import Star from "../common/Star/Star";
// import NotFoundPage from "../NotFoundPage/NotFoundPage";

const SingleMovieLayout = () => {
  const { id } = useParams();
  let movie = {};
  const { data } = useGetSingleMovie(id.toString());

  if (data) {
    movie = { 
      id: data.id,
      Title: data.original_title,
      Synopsys: data.overview,
      Rating: data.vote_average,
      ImageURL: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
      Year: data.release_date.substr(0, 4),
    };
  }

  return (
    <article className="SingleMovie">
      <img src={movie.ImageURL} alt={movie.Title} />
      <div>
        <div>
          <h2>{movie.Title}</h2>
          <p>{movie.Synopsys}</p>
        </div>
        <div>
          <h3>Rating:</h3>
          <h3>{movie.Rating}</h3>
        </div>
        <div>
          <h3>Year of release:</h3>
          <h3>{movie.Year}</h3>
        </div>
          <div>
            <Star movie={movie}/>
          </div>
      </div>
    </article>
  );
};

export default SingleMovieLayout;
