import React, { useEffect } from "react"
import MovieListing from "../../components/MovieListing/MovieListing"
import { useDispatch } from "react-redux"
import {
    fetchAsyncMovies,
    fetchAsyncShows,
} from "../../redux/features/movies/movieSlice"

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAsyncMovies())
        dispatch(fetchAsyncShows())
    }, [])
    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing />
        </div>
    );
};

export default Home