import React from 'react'
import { Link } from 'react-router-dom'
import imdbLogo from "/imdbLogo.png"
function NavBar() {
  return (
    <div className='flex space-x-8 items-center pl-3 py -4'>
      <Link to="/"><img src={imdbLogo} className='w-[50px]'></img></Link>
      <Link to="/" className='text-blue-500 text-2xl font-bold'>Movies</Link>
      <Link to="/watchlist" className='text-blue-500 text-2xl font-bold'>Watchlist</Link>
    </div>
  )
}

export default NavBar
