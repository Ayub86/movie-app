import React, { useEffect } from "react"
import MovieListing from "../../components/MovieListing/MovieListing"
import { useDispatch, useSelector } from "react-redux"
import {
    fetchAsyncMovies,
    fetchAsyncShows,
} from "../../redux/features/movies/movieSlice"

const Home = () => {
    //const getAllMovies=useSelector((state)=> state.movies.movies)
    //const getAllShows=useSelector((state)=> state.movies.shows)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAsyncMovies())
        dispatch(fetchAsyncShows())
    }, [dispatch])
    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing />
        </div>
    );
};

export default Home