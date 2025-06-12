import React, { useEffect, useState ,useContext} from "react";
import MovieCard from "./MovieCard";
import { MovieContext } from "../../context/MovieContext";

function Movies({pageNo}) {
  const [movies, setMovies] = useState(null);
  //const [watchList,setWatchList] = useState([]);
  const {watchList, setWatchList, handleAddWatchlist, removeFromWatchlist} = useContext(MovieContext);
  let controller = new AbortController();
  console.log("API call is made");

  useEffect(()=>{
    let data = localStorage.getItem("watchList") ||[];
    setWatchList(data);
  },[])

  useEffect(() => {
    async function fetchData() {
      console.log("start===");
      const url = `https://www.omdbapi.com/?s=batman&apikey=1ae7d544&page=${pageNo}`;
      console.log("url===", url);

      try {
        const resp = await fetch(url);
        const data = await resp.json();
        console.log("data===", data);

        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      } catch (error) {
        if(error.name = 'AbortError'){
          alert("Aborted")
          console.error("Abort error:", error);
        }
        console.error("Fetch error:", error);
        setMovies([]);
      }
    }
    fetchData();
    return ()=>{
      console.log("Cleaning up");
      controller.abort();
    }
  }, [pageNo]);

  return (
    <div className="text-2xl font-bold text-center m-5">
      <div>
        <h1>Trending Movies</h1>
      </div>
      {movies ? (
        <div className="flex justify-evenly gap-8 flex-wrap m-5">
          {movies.map((movieObj, idx) => (
            <MovieCard key={idx} movieObj={movieObj} addToWatchList={handleAddWatchlist} removeFromWatchList={removeFromWatchlist}/>
          ))}
        </div>
      ) : (
        <h1>Loading....</h1>
      )}
    </div>
  );
}

export default Movies;
