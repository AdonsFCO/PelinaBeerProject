import Card from "./Card/Card";
import "./CardContainer.css";

const CardContainer = ({ data }) => {
  return (
    <div className="cardContainer">
      {data.map((movie) => {
        return (
            <Card key={movie.id}
              movieInfo={{
                id: movie.id ,
                Title: movie.original_title ? movie.original_title : movie.Title,
                Synopsys: movie.overview ? movie.overview : movie.Synopsys,
                Rating: movie.vote_average ? movie.vote_average : movie.Rating,
                ImageURL: `https://image.tmdb.org/t/p/w500${movie.poster_path ? movie.poster_path: movie.ImageURL}`,
                Year: movie.release_date? movie.release_date.substr(0, 4): movie.Year
              }}
            />
         
        );
      })}
    </div>
  );
};

export default CardContainer;
