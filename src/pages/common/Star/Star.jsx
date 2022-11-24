import starAdd from "../../../assets/icons/StarAdd.png";
import starAdded from "../../../assets/icons/StarAdded.png";
import "./Star.css";
import {
  setOnFavorites,
  isOnFavorites,
  removeFavorite,
} from "../../../setup/favoritesManager/favoritesManager";
import { useState } from "react";

const Star = ({ movie }) => {
  let [onFavorite, toggleFavorite] = useState(isOnFavorites(movie.id));

  if (onFavorite) {
    return <img src={starAdded} alt="." onClick={removeFromFavorites} className="star"/>;
  }

  function addToFavorites() {
    setOnFavorites(movie);
    toggleFavorite((onFavorite = true));

    return <img src={starAdd} alt="." onClick={removeFromFavorites} className="star"/>;
  }

  function removeFromFavorites() {
    removeFavorite(movie.id);
    toggleFavorite((onFavorite = false));
  }

  return (
    <img className="star"
      src={onFavorite ? starAdded : starAdd}
      alt="."
      onClick={addToFavorites}
    />
  );
};

export default Star;
