import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './assets/components/NavBar'
import Home from './assets/components/Home'
import WatchList from './assets/components/WatchList'
import MovieContextWrapper from './context/MovieContext';
import { Routes, Route, Link, Outlet ,useParams} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MovieContextWrapper>
    <NavBar/>
    <Routes>
      <Route path="/" element={ <Home/> }></Route>
      <Route path="/watchlist" element={ <WatchList/> }></Route>
    </Routes>
    {/* <Context/> */}
    </MovieContextWrapper>
    </>
  )
}



export default App
