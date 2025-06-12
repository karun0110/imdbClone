import React, { useEffect, useState } from "react";
export const MovieContext = React.createContext();

export default function MovieContextWrapper({children}){
    const [watchList, setWatchList] = useState([]);

   
    function getRandomVoteAverage() {
        // Random float between 1 and 10, rounded to 1 decimal place
        return +(Math.random() * 9 + 1).toFixed(1);
      }
      
      function getRandomPopularity() {
        // Random integer between 10 and 500
        return Math.floor(Math.random() * 491) + 10;
      }
      
      function getRandomGenre() {
        // Pick a random genre from this list
        const genres = ["Action", "Drama", "Comedy", "Sci-Fi", "Thriller", "Romance"];
        return genres[Math.floor(Math.random() * genres.length)];
      }
      
      
      const handleAddWatchlist = (movie) => {
        let updatedWatchList = [...watchList,movie]
        const newWatchList = updatedWatchList.map(movie => ({
          ...movie,
          vote_average: getRandomVoteAverage(),
          popularity: getRandomPopularity(),
          genre: getRandomGenre(),
        }));
        setWatchList(newWatchList);
        localStorage.setItem("watchList",JSON.stringify(newWatchList));
      };
    
      const removeFromWatchlist = (movie) => {
       const filteredMovies = watchList.filter(m => m.imdbID != movie.imdbID);
       setWatchList(filteredMovies);
       localStorage.setItem(JSON.stringify(filteredMovies));
      };



    useEffect(() => {
        let moviesFromLocalStorage = JSON.parse(localStorage.getItem("watchlist")) || [];
        setWatchList(moviesFromLocalStorage);
    },[]);

    return <MovieContext.Provider value = {{watchList, setWatchList, handleAddWatchlist, removeFromWatchlist}}>{children}</MovieContext.Provider>
};