import Tabs from "./pages/common/Tabs/Tabs.jsx";
import Header from "./pages/common/header/Header.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage/MoviesPage.jsx";
import FavoritesPage from "./pages/Favorites/FavoritesPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import SingleMovieLayout from "./pages/SingleMovieLayout/SingleMovieLayout.jsx";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Tabs />

      <Routes>
        <Route path="/" element={<MoviesPage />} />

        <Route path="/Movies" element={<MoviesPage />} />
        <Route path="/Movies/Popular" element={<MoviesPage />} />
        {/* <Route path="/Movies/Latest" element={<MoviesPage />} /> */}
        <Route path="/Movies/Top_rated" element={<MoviesPage />} />
        <Route path="/Movies/Upcoming" element={<MoviesPage />} />
        <Route path="/Movies/Now_Playing" element={<MoviesPage />} />
        <Route path="/Movies" element={<MoviesPage />} />
        {/* <Route path="/Movies/:categoryLink" element={<MoviesPage />} />  Deprecated*/}
        
        <Route path="/Movie/:id" element={<SingleMovieLayout />} />

        <Route path="/Favorites" element={<FavoritesPage />} />
        <Route path="/Favorite" element={<FavoritesPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
