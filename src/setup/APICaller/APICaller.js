//API KEY: 5c8e6a3506967b93e0d41e930c2c31e3
//Example
//https://api.themoviedb.org/3/movie/550?api_key=5c8e6a3506967b93e0d41e930c2c31e3
//ID
//original_title             Title
//Overview                   Synopsis
//vote_Average               Rating
//PosterPath                 imageURL
//ReleaseDate                Year
//Image path example https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

import axios from "axios";
import { useEffect, useState } from "react";


const apiKey = "5c8e6a3506967b93e0d41e930c2c31e3";


function useGetMovies(category, page) {
  const categoryList = ["popular","latest","top_rated", "upcoming", "now_playing"]
  const [data, setData] = useState(null);
  //If its a category with a name that is not on the category list will return the
  //Page to the popular category

  const baseURL = `https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}&language=en-US&page=${page}`;
 

 
  useEffect(
    () => {
      axios.get(baseURL).then((response) => {
        setData(response.data.results);
      });
    },
    //Don't delete this next line  it's not a comment!
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [page, category]
  );
  if(!categoryList.includes(category))
  {
    return {error:"UnknownCategory", categoryName:category}
  }


  return { data };
}

//Yes you could use useGetMovie but people will get confuse
//with plural and singular
function useGetSingleMovie(id) {
  const [data, setData] = useState(null);
  const baseURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
  useEffect(
    () => {
      axios.get(baseURL).then((response) => {
        setData(response.data);
      });
    },

    //Don't delete this next line  it's not a comment!
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return { data };
}






export { useGetMovies, useGetSingleMovie };
