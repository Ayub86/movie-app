import { Navigate } from "react-router"

const ProtectedRoutes = ({ children }) => {

    const isAuth = localStorage.getItem("token")

    console.log('ProtectedRoutes:', isAuth)
    return isAuth ? children : <Navigate to='/login' />

}

export default ProtectedRoutes