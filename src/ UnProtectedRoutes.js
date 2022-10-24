import { Navigate } from "react-router"

export const UnProtectedRoutes = ({ children }) => {

    const isAuth = localStorage.getItem('token')
    console.log('UnProtectedRoutes:', isAuth)
    return isAuth ? <Navigate to='/' /> : children
}
export default UnProtectedRoutes