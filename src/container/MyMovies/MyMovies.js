import API from "../../utlis/API"

const MyMovies = () => {
  API.get("/all-movies")
    .then((response) => {
      console.log("---res", response);
      // let message = response?.data?.message;
      const movies = response.data.movies
      console.log("Status", response.request.statusText);
      // alert(`${message}`);
      //setIsloading(false);
      // navigate("/verification")
    })
    .catch((error) => {
      // let message = error?.response?.data?.message;
      console.log("Status", error);
      // alert(`${message}`);
      //setIsloading(false);
    });
  return (
    <div>{ }</div>
  )
}

export default MyMovies