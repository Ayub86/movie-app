import "../../assest/scss/Header.scss"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import {
    fetchAsyncMovies,
    fetchAsyncShows,
} from "../../redux/features/movies/movieSlice"
import { useDispatch } from "react-redux"
import user from "../../assest/images/user.png"


const Header = () => {
    const [term, setTerm] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("token")
        navigate("/login")
    }

    const submitHandle = (e) => {
        e.preventDefault()

        dispatch(fetchAsyncMovies(term))
        dispatch(fetchAsyncShows(term))
        setTerm("")
    }

    return (
        <div className="header">

            <div className="pages-link">
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

            <div className="logo-main">

                <Link to="/">
                    IMDb
                </Link>
            </div>

            <div className="search-bar">

                <form onSubmit={submitHandle}>

                    <input
                        type="search"
                        value={term}
                        placeholder="Search Movies or Shows"
                        onChange={(e) => setTerm(e.target.value)}
                        required />
                    <i className="fa fa-search"></i>

                </form>
            </div>

            <div className="profile-logout" >
                <ul>

                    <li >
                        <Link to="/profile">
                            Profile
                        </Link>
                    </li>
                    <li onClick={handleLogout}>
                        LogOut
                    </li>

                </ul>

            </div>

            <div className="user-image">
                <Link to="/profile">
                    <img src={user} alt="user" />
                </Link>
            </div>
        </div>
    );
};

export default Header