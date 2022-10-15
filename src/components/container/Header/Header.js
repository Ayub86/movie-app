import "../../../assests/scss/Header.scss"
import user from "../../../assests/images/user.png"
import { Link } from "react-router-dom"
import { useState } from "react"
import {
    fetchAsyncMovies,
    fetchAsyncShows,
} from "../../../redux/features/movies/movieSlice"
import { useDispatch } from "react-redux"

const Header = () => {
    const [term, setTerm] = useState("")
    const dispatch = useDispatch();
    const submitHandle = (e) => {
        e.preventDefault()

        dispatch(fetchAsyncMovies(term))
        dispatch(fetchAsyncShows(term))
        setTerm("")

    }
    return (
        <div className="header">

            <div className="logo">

                <ul>
                    <li>
                        <Link to="/">
                            IMDb
                        </Link>
                    </li>
                    <li>
                        <Link to="/allmovies">
                            All Movies
                        </Link>
                    </li>
                    <li>
                        <Link to="/mymovies">
                            My Movies
                        </Link>
                    </li>
                    <li>
                        <Link to="/addmovies">
                            Add Movie
                        </Link>
                    </li>
                </ul>


            </div>
            <div className="search-bar">
                <form onSubmit={submitHandle}>
                    <input
                        type="text" value={term}
                        placeholder="Search Movies or Shows"
                        onChange={(e) => setTerm(e.target.value)} />
                    <button type="sumbit"><i className="fa fa-search"></i></button>
                </form>
            </div>
            <div className="user-image">
                <img src={user} alt="user" />
            </div>
        </div>
    );
};

export default Header