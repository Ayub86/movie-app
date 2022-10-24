import React, { useEffect } from "react"
import { useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import {
    fetchAsyncShowDetail,
    removeSelectedMovieOrShow,
} from "../../redux/features/movies/movieSlice"
import Details from "../Details/Details"

const ShowDetail = () => {
    const data = useSelector((state) => state.movies)
    console.log("showdetail",data)
    // const  email  = useSelector((state) => state.movies.user.email)
    console.log("showuseSelector====>", data)
    const { id } = useParams()
    console.log("showid====>", id)
    const dispatch = useDispatch()
    console.log("showdata==>", data);
    useEffect(() => {
        dispatch(fetchAsyncShowDetail(id))
        return () => {
            dispatch(removeSelectedMovieOrShow())
        };
    }, [dispatch,id])

    return (
        <div>
            <Details data={data} />
        </div>
    )
}

export default ShowDetail