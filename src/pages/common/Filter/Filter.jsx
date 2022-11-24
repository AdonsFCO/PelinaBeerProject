import { useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { categoryContext } from "../../../setup/categoryContext/categoryContext";
import { Link } from "react-router-dom";
const Filter = () => {
  const setCategory = useContext(categoryContext);

    function changeCategory(categoryName,categoryFriendlyName){
        setCategory({name: categoryName, friendlyName:categoryFriendlyName });
    }



  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Categories 
      </Dropdown.Toggle>

      <Dropdown.Menu>

        <Dropdown.Item>
          <Link to="/Movies/Popular" onClick={()=>changeCategory("popular","Popular")}>Popular</Link>
        </Dropdown.Item>
        
        <Dropdown.Item>
          <Link to="/Movies/Top_Rated" onClick={()=>changeCategory("top_rated","Top Rated")}>Top-rated</Link>
        </Dropdown.Item>

        <Dropdown.Item>
          <Link to="/Movies/Upcoming" onClick={()=>changeCategory("upcoming", "Upcoming")}>Upcoming</Link>
        </Dropdown.Item>

        <Dropdown.Item>
          <Link to="/Movies/Now_Playing" onClick={()=>changeCategory("now_playing", "Now Playing")}>Now-Playing</Link>
        </Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Filter;
