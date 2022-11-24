import "./Tabs.css";
import popcorn from "../../../assets/icons/popcorn.png";
import star from "../../../assets/icons/StarAdded.png";
import { linkStyle } from "../../../assets/brand/stylesObjects";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Tab = () => {
  const activeTab = "nav-item nav-link active";
  const inactiveTab = "nav-item nav-link";
  const { pathname } = useLocation();
  let moviesTab = activeTab;
  let favoritesTab = inactiveTab;
  if (pathname.indexOf("Favorites") > -1) {
    moviesTab = inactiveTab;
    favoritesTab = activeTab;
  }

  return (
    <nav>
      <ul className={"nav nav-tabs"}>
        <Link to="/">
          <li className={moviesTab} style={linkStyle}>
            <img className="popCornIcon" src={popcorn} alt="PopCorn" />
            <label>Movies</label>
          </li>
        </Link>
        <Link to="/Favorites">
          <li className={favoritesTab} style={linkStyle}>
            <img className="popCornIcon" src={star} alt="PopCorn" />
            <label>Favorites</label>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Tab;
