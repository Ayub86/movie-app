import { Routes, Route } from "react-router-dom";
import Home from "./container/Home/Home";
import LogIn from "./components/Login/Login";
import Register from "./components/Register/Register";
import ForgotPassword from "./components/Forgotpassword/Forgotpassword";
import ResetPassword from "./components/ResetPassword/Reset";
import Verification from "./components/Verification/Verification";
import PageNotFound from "./components/PageNotFound/PageNotFound"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import MyMovies from "./container/MyMovies/MyMovies";
import AddMovie from "./components/AddMovie/AddMovie";
import AllMovies from "./container/AllMovie/AllMovies";
import Profile from "./container/Profile/Profile";
import ProtectedRoutes from "./ProtectedRoutes";
import UnProtectedRoutes from "./ UnProtectedRoutes";
import "./assest/scss/App.scss"
import MovieDetail from "./components/MovieDetail/MovieDetail";
import ShowDetail from "./components/ShowDetail/ShowDetail";


function App() {
  return (
    <>
      <div className="app">
        <Header />
        <div className="container">
          <Routes>
            {/* login ROUTE */}
            <Route path="/login" element={
              <UnProtectedRoutes>
                <LogIn />
              </UnProtectedRoutes>
            } />
            <Route path="/register" element={
              <UnProtectedRoutes>
                <Register />
              </UnProtectedRoutes>
            } />
            <Route path="/forgot-password" element={
              <UnProtectedRoutes>
                <ForgotPassword />
              </UnProtectedRoutes>
            } />
            <Route path="/reset-password/:otp" element={
              <UnProtectedRoutes>
                <ResetPassword />
              </UnProtectedRoutes>
            } />
            <Route path="/verification" element={
              <UnProtectedRoutes>
                <Verification />
              </UnProtectedRoutes>
            } />
            <Route path="/" element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            } />
            <Route path="/allmovies" element={
              // <ProtectedRoutes>
              <AllMovies />
              // </ProtectedRoutes>

            } />
            <Route path="/mymovies" element={
              // <ProtectedRoutes>
              <MyMovies />
              // </ProtectedRoutes>
            } />
            <Route path="/addmovie" element={
              // <ProtectedRoutes>
              <AddMovie />
              // </ProtectedRoutes>
            } />
            <Route path="/profile" element={
              // <ProtectedRoutes>
              <Profile />
              // </ProtectedRoutes>
            } />
            <Route path="/movie/:id" element={
              // <ProtectedRoutes>
              <MovieDetail />
              // </ProtectedRoutes>
            } />
            <Route path="/show/:id" element={
              // <ProtectedRoutes>
              <ShowDetail />
              // </ProtectedRoutes>
            } />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
