import React, { useEffect } from "react"
import { useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import {
    fetchAsyncMovieDetail,
    removeSelectedMovieOrShow,
} from "../../redux/features/movies/movieSlice"
import Details from "../Details/Details"

const MovieDetail = () => {
    const movies = useSelector((state) => state.movies)
    console.log("moviedata", movies)
    // const  email  = useSelector((state) => state.movies.user.email)
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAsyncMovieDetail(id))
        return () => {
            dispatch(removeSelectedMovieOrShow())
        };
    }, [dispatch, id])

    const { selectMovieOrShow } = movies;
    const { movie } = selectMovieOrShow;
   // console.log("0000000000", movie);


    return (
        <div>
            <Details data={movie} />
        </div>
    )
}

export default MovieDetail