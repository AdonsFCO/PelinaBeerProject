import CardContainer from "../common/CardContainer/CardContainer";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { useGetMovies } from "../../setup/APICaller/APICaller";
import { useState } from "react";
import { categoryContext } from "../../setup/categoryContext/categoryContext";
import loadingIcon from "../../assets/icons/Loading.gif";
import Filter from "../common/Filter/Filter";
import "./MoviesPage.css";
import PaginationButtons from "../common/PaginationButtons/PaginationButtons";
import { paginationContext } from "../../setup/paginationContext/paginationContext";

const MoviesPage = () => {
  const [currentPage, changeCurrentPage] = useState(1);
  const [currentCategory, setCategory] = useState({name:"popular", friendlyName: "Popular"});


  const movies = useGetMovies(currentCategory.name, currentPage.toString());

  if (movies.error) {
    return <NotFoundPage />;
  }

  if (!movies.data) {
    return <img src={loadingIcon} alt="." />;
  }

  return (
    <>
      <div className="movies-header">
        <h1>{currentCategory.friendlyName}</h1>
        <categoryContext.Provider value={setCategory}>
          <Filter />
        </categoryContext.Provider>
      </div>
      <CardContainer data={movies.data} />

      <div>
      <paginationContext.Provider value={changeCurrentPage}>
      <PaginationButtons />
      </paginationContext.Provider>
        {/* <button
          type="button"
          className="btn btn-primary"
          onClick={() => changeCurrentPage(currentPage + 1)}
        >
          Next
        </button> */}
      </div>
    </>
  );
};

export default MoviesPage;
