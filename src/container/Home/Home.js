import React, { useEffect } from "react"
import MovieListing from "../../components/MovieListing/MovieListing"
import { useDispatch } from "react-redux"
import {
    fetchAsyncMovies,
    fetchAsyncShows,
} from "../../redux/features/movies/movieSlice"

const Home = () => {
    const dispatch = useDispatch();
    const movieText = "Batman"
    const seriesText = "Friends";
    // useEffect(() => {
    //     dispatch(fetchAsyncMovies(movieText))
    //     dispatch(fetchAsyncShows(seriesText))
    // }, [])
    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing />
        </div>
    );
};

export default Home