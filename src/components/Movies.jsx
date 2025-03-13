import { useState, useEffect } from "react";

export function Movies({ movies, showFavorites, showSorted }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      try {
        const parsedFavorites = JSON.parse(storedFavorites);
        if (Array.isArray(parsedFavorites)) {
          setFavorites(parsedFavorites);
        }
      } catch (error) {
        console.error("Error al parsear los favoritos desde localStorage:", error);
      }
    }
  }, []);

  useEffect(() => {
    if (favorites.length > 0) {
      try {
        localStorage.setItem("favorites", JSON.stringify(favorites));
      } catch (error) {
        console.error("Error al guardar los favoritos en localStorage:", error);
      }
    }
  }, [favorites]);

  const moviesToShow = showFavorites ? favorites : movies;

  
  let sortedMovies = moviesToShow;
  if (showSorted === 'sortByTitle') {
    sortedMovies = [...moviesToShow].sort((a, b) => a.Title.localeCompare(b.Title));
  } else if (showSorted === 'sortByYear') {
    sortedMovies = [...moviesToShow].sort((a, b) => {
      return parseInt(a.Year) - parseInt(b.Year);
    });
  }

  const handleFavorite = (movie) => {
    const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);
    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.imdbID !== movie.imdbID));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  return (
    <main className="main">
      {sortedMovies.length > 0 ? (
        sortedMovies.map((movie) => (
          <div key={movie.imdbID}>
            <div>
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
            <img src={movie.Poster} alt={movie.Title} />
            <div>
              {favorites.some((fav) => fav.imdbID === movie.imdbID) ? (
                <button className="fav" onClick={() => handleFavorite(movie)}>
                  Remove from favorites
                </button>
              ) : (
                <button className="fav" onClick={() => handleFavorite(movie)}>
                  Add to favorites
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>No movies to display.</p>
      )}
    </main>
  );
}