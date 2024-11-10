import React from 'react'
import { useParams } from 'react-router-dom'

const SingleMovie = () => {
    const {movieId}=useParams();
  return (
    <div>
      movieId :{movieId}
    </div>
  )
}

export default SingleMovie
