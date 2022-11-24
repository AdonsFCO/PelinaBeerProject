import "./PaginationButtons.css";
import { useContext } from "react";
import { paginationContext } from "../../../setup/paginationContext/paginationContext";
const PaginationButtons = () => {

    const pagination = useContext(paginationContext);
    
    function nextPage()
    {
       pagination.changePagination(pagination.currentPage +1)
    }
    function previousPage()
    {

    }

  return (
    <div className="pagination-group">
      <button type="button" className="btn btn-primary" onClick={nextPage}>
        Next
      </button>
      <button type="button" className="btn btn-primary" onClick={previousPage}>
        Prev
      </button>
    </div>
  );
};
export default PaginationButtons;
