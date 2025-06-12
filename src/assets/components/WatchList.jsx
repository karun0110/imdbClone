import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

function WatchList() {
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    let data = localStorage.getItem("watchList");
    if (data) {
      setWatchList(JSON.parse(data));
    }
  }, []);

  const handleAscendingRating = () => {
    const sortedList = [...watchList].sort((a, b) => a.vote_average - b.vote_average);
    setWatchList(sortedList);
    console.log("Sort low to high");
  };

  const handleDescendingRating = () => {
    const sortedList = [...watchList].sort((a, b) => b.vote_average - a.vote_average);
    setWatchList(sortedList);
    console.log("Sort high to low");
  };

  const removeFromWatchlist = (movieToRemove) => {
    const filteredList = watchList.filter(movie => movie.imdbID !== movieToRemove.imdbID);
    setWatchList(filteredList);
    localStorage.setItem("watchList", JSON.stringify(filteredList));
  };

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-4 font-medium text-gray-900">Name</th>
            <th>
              <div className="flex">
                <FontAwesomeIcon className="p-1 cursor-pointer" icon={faArrowUp} onClick={handleAscendingRating} />
                <div className="p-1">Ratings</div>
                <FontAwesomeIcon className="p-1 cursor-pointer" icon={faArrowDown} onClick={handleDescendingRating} />
              </div>
            </th>
            <th>
              <div className="flex">
                <div>Popularity</div>
              </div>
            </th>
            <th>
              <div className="flex">
                <div>Genre</div>
              </div>
            </th>
            <th>
              <div className="flex">
                <div>Delete</div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {watchList.map((movieObj, idx) => (
            <tr className="hover:bg-gray-50" key={idx}>
              <td className="flex items-center px-6 py-4 font-normal text-gray-900">
                <img
                  className="h-[6rem] w-[10rem] object-fit"
                  src={`${movieObj.Poster}`}
                  alt=""
                />
                <div className="font-medium text-gray-700 text-sm ml-2">
                  {movieObj.Title}
                </div>
              </td>
              <td className="pl-6 py-4">{movieObj.vote_average}</td>
              <td className="pl-6 py-4">{movieObj.popularity}</td>
              <td className="pl-2 py-4">{movieObj.genre}</td>
              <td className="pl-2 py-4 text-red-600 cursor-pointer" onClick={() => removeFromWatchlist(movieObj)}>
                <FontAwesomeIcon icon={faTrash} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WatchList;
