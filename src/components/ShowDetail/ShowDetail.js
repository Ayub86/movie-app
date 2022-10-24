import React, { useEffect } from "react"
import { useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import {
    fetchAsyncShowDetail,
    removeSelectedMovieOrShow,
} from "../../redux/features/movies/movieSlice"
import Details from "../Details/Details"

const ShowDetail = () => {
    
     const  showdata  = useSelector((state) => state.movies)
    //console.log("showuseSelector====>", data)
    const { id } = useParams()
    //console.log("showid====>", id)
    const dispatch = useDispatch()
   // console.log("showdata==>", data);
    useEffect(() => {
        dispatch(fetchAsyncShowDetail(id))
        return () => {
            dispatch(removeSelectedMovieOrShow())
        };
    }, [dispatch,id])
    const { selectMovieOrShow } = showdata;
    const { show } = selectMovieOrShow;

    return (
        <div>
            <Details data={show} />
        </div>
    )
}

export default ShowDetail