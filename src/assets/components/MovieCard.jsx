import React from 'react'

function MovieCard({movieObj,addToWatchList,removeFromWatchList}) {
    const watchList = JSON.parse (localStorage.getItem("watchList"))   ||[];
    const isInWatchList = ()=>{
    return watchList.find(movie=>movie.imdbID == movieObj.imdbID)
   };
  return (
    <div
              className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col items-end place-content-between"
              style={{
                backgroundImage: `url(${movieObj.Poster})`,
              }}
            >
              <div className="text-white w-full text-center text-xl p-2 bg-gray-900/70 rounded-lg">
                {movieObj.Title}
              </div>
              
              {
                isInWatchList() ? (<div className='m-3 flex justify-center h-8 w-8 item-center  rounded-lg bg-gray-900/60' onClick={()=>removeFromWatchList(movieObj)} > ❌
              </div> ):(
                <div className='m-3 flex justify-center h-8 w-8 item-center  rounded-lg bg-gray-900/60' onClick={()=>addToWatchList(movieObj)}> 😍
                </div>
              )
              }
              
    </div>
  )
}

export default MovieCard
