import React from "react"   
import { Link } from "react-router-dom"
import "../../assest/scss/MovieCard.scss"

const MovieCard = (props) => {
    const { data } = props;
    console.log(data,"data")
    
    return (
        <div className="card-item">
            <Link to={`/movie/${data.id}`}>
                <div className="card-inner">
                    <div className="card-top">
                        <img src={data.cover_photo} alt={data.title} />
                    </div>
                    <div className="card-bottom">
                        <div className="card-info">
                            <h4>{data.title}</h4>
                            <p>{data.createdAt}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MovieCard