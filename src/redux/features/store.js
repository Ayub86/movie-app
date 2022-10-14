import { configureStore } from "@reduxjs/toolkit"
import moviesReducer from '../../redux/features/movies/movieSlice'

export const store = configureStore({
   reducer: {
      movies: moviesReducer,
   }
})