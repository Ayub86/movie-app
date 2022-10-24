import React, { useEffect } from "react"
import { useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import {
    fetchAsyncShowDetail,
    removeSelectedMovieOrShow,
} from "../../redux/features/movies/movieSlice"
import Details from "../Details/Details"

const ShowDetail = () => {
    const shows = useSelector((state) => state.movies)

    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAsyncShowDetail(id))
        return () => {
            dispatch(removeSelectedMovieOrShow())
        };
    }, [dispatch, id])

    console.log("showdata", shows)
    const { selectMovieOrShow } = shows;
    const { show } = selectMovieOrShow;
    console.log("0000000000", show);

    return (
        <div>
            <Details data={show} />
        </div>
    )
}

export default ShowDetail