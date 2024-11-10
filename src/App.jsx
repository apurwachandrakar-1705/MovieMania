import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Fire from "./assets/fire.png";
import Star from "./assets/glowing-star.png";
import Party from "./assets/partying-face.png";

import NavBar from './components/Navbar/NavBar'
import MovieList from './components/MovieList/MovieList'
import SingleMovie from './components/MovieList/SingleMovie'


function App() {

  return (
    <div className="app">
      <NavBar></NavBar>
      <main>
            <Routes>
        <Route path="/" element={<MovieList type="popular"title="Popular" emoji={Fire}></MovieList>} ></Route>
       <Route path='/top_rated' element={<MovieList type="top_rated"title="Top Rated" emoji={Star}></MovieList>}></Route>
       <Route path='/upcoming' element={<MovieList type="upcoming"title="Upcoming" emoji={Party}></MovieList>} ></Route> 
       <Route path='/movie/:movieId' element={<SingleMovie></SingleMovie>} ></Route> 

      </Routes>
      </main>

    
    
   
   
    

    </div>
  )
}

export default App
