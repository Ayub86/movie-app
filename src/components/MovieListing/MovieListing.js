import React from "react"
import { useSelector } from "react-redux"
import { getAllMovies, getAllShows } from "../../redux/features/movies/movieSlice"
import MovieCard from "../MovieCard/MovieCard";
import "../../assest/scss/MovieListing.scss"

const MovieListing = () => {
    const movies = useSelector((state) => state.movies.movies)
    const shows = useSelector((state) => state.movies.shows)
    console.log(movies, "movies")
    console.log(shows, "shows")

    let renderMovies,
        renderShows = "";

    renderMovies =
        movies.movies && movies.movies.map((movie) => (
            <MovieCard key={movie.id} data={movie} />))
    // movies.Response === "Ok" ? (
    //     ))
    // ) 
    // : (
    //     <div className="movies-error">
    //         <h3>{movies.Error}</h3>
    //     </div>
    // );

    renderShows =
        shows.shows && shows.shows.map((show) => (
            <MovieCard key={show.id} data={show} />))



    
            
    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">{renderMovies}</div>
            </div>
            <div className="show-list">
                <h2>Shows</h2>
                <div className="movie-container">{renderShows}</div>
            </div>
        </div>
    )
}

export default MovieListing