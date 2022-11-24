function checkFavorites() {
  if (!localStorage.getItem("favoriteList")) {
    localStorage.setItem("favoriteList", []);
  }
  if (localStorage.getItem("favoriteList").length === 0) {
    return false;
  }
  return true;
}
function getFavoriteList() {
  if (checkFavorites()) {
    const favoriteList = JSON.parse(localStorage.getItem("favoriteList"));
    return favoriteList;
  }
}
function isOnFavorites(id) {

    if(checkFavorites())
    {
      
      const favoriteList = getFavoriteList();
      for (let counter = 0; counter < favoriteList.length; counter++) {
              if(favoriteList[counter].id === id)
              {
                  return true
              }
      }

    
      
    }
  // if (checkFavorites()) {
  //   console.log("yea beibi")
  //   const favoriteList = getFavoriteList();
  //   console.log(favoriteList);
   
  //   if (favoriteList.includes(movie)) {
  //     console.log(`I'm black`)
  //     return true;
  //   }
  // }
 return false;
}
function removeFavorite(id) {
  const favoriteList = getFavoriteList();

  if(isOnFavorites(id))
  { 
    for (let counter = 0; counter < favoriteList.length; counter++) {
        if(favoriteList[counter].id === id)
        {
          favoriteList.splice(counter,1);
          localStorage.setItem("favoriteList", JSON.stringify(favoriteList));
        }
      
    }

  }

}

function setOnFavorites(movie) {
  let favorites = [];
  if(checkFavorites())
  {
    favorites = JSON.parse(localStorage.getItem("favoriteList"));
  }
 
  favorites.push(movie);
  localStorage.setItem("favoriteList", JSON.stringify(favorites));
}

export { setOnFavorites, getFavoriteList, isOnFavorites , removeFavorite};
