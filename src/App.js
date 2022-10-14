import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/container/Home/Home";
import LogIn from "./components/container/Login/Login";
import Register from "./components/container/Register/Register";
import ForgotPassword from "./components/container/Forgotpassword/Forgotpassword";
import ResetPassword from "./components/container/ResetPassword/Reset";
import Verification from "./components/container/Verification/Verification";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:otp" element={<ResetPassword />} />
          <Route path="/verification" element={<Verification />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
