import React, { useEffect } from "react"
import "../../assest/scss/MovieDetail.scss"
import { useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import {
    fetchAsyncMovieOrShowDetail,
    getSelectedMovieOrShow,
    removeSelectedMovieOrShow,
} from "../../redux/features/movies/movieSlice"

const MovieDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const data = useSelector((state) => state.movies.selectMovieOrShow)
    // console.log(data);
    useEffect(() => {
        dispatch(fetchAsyncMovieOrShowDetail(id))
        return () => {
            dispatch(removeSelectedMovieOrShow())
        };
    }, [dispatch, id])
    return (
        <div className="movie-section">
            {Object.keys(data).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <>
                    <div className="section-left">
                        <div className="movie-title">{data.title}</div>
                        <div className="movie-rating">
                            <span>
                                IMDB Rating <i className="fa fa-star"></i> : {data.rating}
                            </span>
                            {/* <span>
                                IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                                {data.imdbVotes}
                            </span>
                            <span>
                                Runtime <i className="fa fa-film"></i> : {data.Runtime}
                            </span> */}
                            <span>
                                Year <i className="fa fa-calendar"></i> : {data.createdAt}
                            </span>
                        </div>
                        <div className="movie-plot">{data.discription}</div>
                        <div className="movie-info">
                            <div>
                                <span>Director</span>
                                <span>{data.user}</span>
                            </div>
                            {/* <div>
                                <span>Stars</span>
                                <span>{data.Actors}</span>
                            </div> */}
                            <div>
                                <span>Sub Titles</span>
                                <span>{data.sub_titles}</span>
                            </div>
                            <div>
                                <span>Languages</span>
                                <span>{data.Language}</span>
                            </div>
                            <div>
                                <span>Generes</span>
                                <span>{data.generes}</span>
                            </div>
                        </div>
                    </div>
                    <div className="section-right">
                        <img src={data.cover_photo} alt={data.title} />
                    </div>
                </>
            )}
        </div>
    )
}

export default MovieDetail