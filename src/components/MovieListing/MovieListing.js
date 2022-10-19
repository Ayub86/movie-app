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


    //const movies = useSelector(getAllMovies)
    // const shows = useSelector(getAllShows)
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



    // shows.Response === "True" ? (
    //     shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    // ) : (
    //     <div className="shows-error">
    //         <h3>{shows.Error}</h3>
    //     </div>
    // );
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