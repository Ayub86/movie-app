import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import MovieListing from "../../components/MovieListing/MovieListing"
import { useDispatch } from "react-redux"
import API from "../../utlis/API"
import { fetchAsyncMovies } from "../../redux/features/movies/movieSlice"

const MyMovies = () => {
  const data = useSelector((state) => state.movies)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies())
  }, [dispatch])
  // const { movie } = movies
  console.log(data)

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing data={data} />
    </div>
  )
}

export default MyMovies