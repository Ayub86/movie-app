import "../../../assest/scss/Header.scss"
import { Link } from "react-router-dom"
import { useState } from "react"
import {
    fetchAsyncMovies,
    fetchAsyncShows,
} from "../../../redux/features/movies/movieSlice"
import { useDispatch } from "react-redux"
import user from "../../../assest/images/user.png"


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

            <div className="logo-main">

                <Link to="/">
                    IMDb
                </Link>
            </div>

            <div className="logo">
                <ul>

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
                        type="search"
                        value={term}
                        placeholder="Search Movies or Shows"
                        onChange={(e) => setTerm(e.target.value)}
                        required />
                    <i class="fa fa-search"></i>

                </form>
            </div>

            <div className="user-image">
                <ul className="drop-down">
                    <img src={user} alt="user" />
                    <li>
                        Profile
                    </li>
                    <li>
                        LogOut
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header