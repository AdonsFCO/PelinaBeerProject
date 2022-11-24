import "./Card.css";
import { Link } from "react-router-dom";
import Star from "../../Star/Star";
import {linkStyle} from "../../../../assets/brand/stylesObjects"; 

const Card = ({ movieInfo }) => {
  let data;

  //Default data in case of not have the information available from the API
  if (!movieInfo) {
    data = {
      Title: "Back to the future",
      Year: "1985",
      Rating: "8.5/10",
      imageURL: "https://dummyimage.com/2000x3000/000/fff",
    };
  } else {
    data = movieInfo;
  }

  return (
    <div className="movieCard card">
      <Star movie={data} />
      <Link to={`/movie/${data.id}` } style={linkStyle}>
        <div className="card-body">
          <div className="Title">
            <h4 style={{textAlign:"center"}}>{data.Title}</h4>
          </div>

          <div className="poster">
            <img
              src={data.ImageURL}
              alt="Movie Poster"
              className="moviePosterImg"
            />
          </div>
          <div className="movieDetails">
            <div className="movieDetails--year">
              <label>Year:&nbsp;</label>
              <label>{data.Year}</label>
            </div>
            <div className="movieDetails--rating">
              <label>Rating:&nbsp; </label>
              <label>{data.Rating}</label>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
