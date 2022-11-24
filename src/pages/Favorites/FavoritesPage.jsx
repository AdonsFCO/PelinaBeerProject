import CardContainer from "../common/CardContainer/CardContainer";
import { getFavoriteList } from "../../setup/favoritesManager/favoritesManager.js";

const FavoritesPage = () => {
  const favoriteList = getFavoriteList();
  console.log(favoriteList)

  if (favoriteList) {
    return (
      <div>
        <CardContainer data={favoriteList} />
      </div>
    );
  }
 
    return <h2>There is nothing to show right now</h2>;

};

export default FavoritesPage;
