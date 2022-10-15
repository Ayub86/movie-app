import { Routes, Route } from "react-router-dom";
import Home from "./components/container/Home/Home";
import LogIn from "./components/container/Login/Login";
import Register from "./components/container/Register/Register";
import ForgotPassword from "./components/container/Forgotpassword/Forgotpassword";
import ResetPassword from "./components/container/ResetPassword/Reset";
import Verification from "./components/container/Verification/Verification";
import MovieDetail from "./components/container/MovieDetail/MovieDetail"
import PageNotFound from "./components/container/PageNotFound/PageNotFound"
import Footer from "./components/container/Footer/Footer"
import Header from "./components/container/Header/Header"
import "./assests/scss/App.scss"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
 <div className="app">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:otp" element={<ResetPassword />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        </div>
        <Footer />
        </div>
    </>
  );
}

export default App;
