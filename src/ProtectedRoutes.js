import { Navigate ,Outlet} from "react-router"

const ProtectedRoutes = () => {

    const isAuth = localStorage.getItem("token")

   // console.log('ProtectedRoutes:', isAuth)
    return isAuth ? <Outlet/> : <Navigate to='/login' />

}

export default ProtectedRoutes