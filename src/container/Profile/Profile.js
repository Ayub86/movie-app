import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAsyncUser } from "../../redux/features/movies/movieSlice";
import { useParams } from "react-router"

const Profile = () => {
  const dispatch = useDispatch();
  const { id } = useParams()

  useEffect(() => {
    dispatch(fetchAsyncUser(id))
  }, [dispatch, id])

  const user = useSelector((state) => state)
  console.log(user)
  return (
    <div>Profile</div>
  )
}

export default Profile