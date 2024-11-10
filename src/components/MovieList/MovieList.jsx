import _ from 'lodash'
import "./MovieList.css";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import FilterGroup from "../FilterGroup";
const MovieList = ({type,title,emoji}) => {
   const[movies,setMovies]=useState([]);
  const[filteredMovies,setFilteredMovies]=useState([])
  const[minRating,setMinRating]=useState(0)
  const [sort,setSort]=useState({
    by:"default",
    order:'asc'
  })
  useEffect(() => {
    fetchMovies();
  }, [type]);
  useEffect(()=>{
    if(sort.by !=="default"){
     const sortedMovies= _.orderBy(filteredMovies,[sort.by],[sort.order] )
    setFilteredMovies(sortedMovies)
    }
  },[sort])
  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=40b920f5224ef0899853fc6d1df0942a`
    );
   const data= await response.json();
   setMovies(data.results);
   setFilteredMovies(data.results)
  };
const handleFilter = (rate)=>{
  if(rate===minRating){
    setMinRating(0);
    setFilteredMovies(movies)

  }
  else{
    setMinRating(rate)
  const filteredMovie=movies.filter(movie=>movie.vote_average >=rate)
  setFilteredMovies(filteredMovie)
  }
}

const handleSort=(e)=>{
const {name,value}=e.target;
setSort(prev=>{
  return{...prev,[name]:value}
})
}

  return (
    <section className="movie_list" id={type}>
      <header className=" align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          {title} <img className="navbar_emoji" src={emoji} alt={`${emoji}icon` }/>
        </h2>
        <div className="align_center movie_list_fs">
          <FilterGroup ratings={[8,7,6]} minRating={minRating} handleFilter={handleFilter} ></FilterGroup>
          <select name="by" id="" className="movie_sorting" onChange={handleSort} value={sort.by} >
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select value={sort.order} onChange={handleSort} name="order" id="" className="movie_sorting">
            <option value="asc">Ascending</option>
            <option value="desc">Desending</option>
          </select>
        </div>
      </header>
      <div className="movie_cards">
       {filteredMovies.map(movie=><MovieCard key={movie.id} movie ={movie} ></MovieCard>)}
      </div>
    </section>
  );
};
export default MovieList;
