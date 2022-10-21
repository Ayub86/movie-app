import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import API from "../../../utlis/API"

export const fetchAsyncLogin = createAsyncThunk(
    "login/fetchAsyncLogin",
    async ({ email, password }) => {
        try {
            const response = await API.post("/login", { email, password })
            let token = response.data.token
            localStorage.setItem("token", token)
            let message = response?.data?.message;
            // alert(`${message}`)
            return response?.data
        } catch (error) {
            let message = error?.response?.data?.message;
            // alert(`${message}`)
        }
    }
)

export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies",
    async () => {
        try {
            const response = await API.get("/all-movies")
            let message = response?.data?.message;
            console.log("res", response)
            // alert(`${message}`)
            return response?.data
        } catch (error) {
            let message = error?.response?.data?.message;
            // alert(`${message}`)
        }
    }
       
    
)

export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    async () => {
        try {
            const response = await API.get("/all-shows")
            let message = response?.data?.message;
            console.log("res", response)
            // alert(`${message}`)
            return response?.data
        } catch (error) {
            let message = error?.response?.data?.message;
            // alert(`${message}`)
        }
    }
)

export const fetchAsyncMovieDetail = createAsyncThunk(
    "movies/fetchAsyncMovieDetail",
    async (id) => {
        try {
            const response = await API.get(`/all-movies/${id}`)
            let message = response?.data?.message;
            console.log("single-movie", response)
            // alert(`${message}`)
            return response?.data
        } catch (error) {
            let message = error?.response?.data?.message;
            // alert(`${message}`)
        }
    })

export const fetchAsyncShowDetail = createAsyncThunk(
    "movies/fetchAsyncShowDetail",
    async (id) => {
        try {
            const response = await API.get(`/all-shows/${id}`)
            let message = response?.data?.message;
            console.log("single-show", response)
            // alert(`${message}`)
            return response?.data
        } catch (error) {
            let message = error?.response?.data?.message;
            // alert(`${message}`)
        }
    })

const initialState = {
    user: null,
    movies: {},
    shows: {},
    selectMovieOrShow: {},
    loading: false,
    success: false,
    //userToken,
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.selectMovieOrShow = {}
        },
    },
    extraReducers: {
        [fetchAsyncLogin.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [fetchAsyncLogin.fulfilled]: (state, { payload }) => {
            console.log("Login Fetched Successfully!")
            // console.log("payload",  payload )
            state.laoding = false
            state.user = payload
            state.success = true
            state.userToken = payload.userToken
        },
        [fetchAsyncLogin.rejected]: (state, payload) => {
            state.loading = false
            state.error = payload
        },

        [fetchAsyncMovies.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("Movies Fetched Successfully!")
            console.log("payload", payload)
            // state.laoding = false
            // state.success = true
            return { ...state, movies: payload }
        },
        [fetchAsyncMovies.rejected]: (state, payload) => {
            state.loading = false
            state.error = payload
        },

        [fetchAsyncShows.pending]: (state) => {
            state.loading = true
            state.error = null
        },

        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("Shows Fetched Successfully!")
            console.log("payload", payload)
            // state.laoding = false
            // state.success = true
            return { ...state, shows: payload }
        },

        [fetchAsyncShows.rejected]: (state, payload) => {
            state.loading = false
            state.error = payload
        },

        [fetchAsyncMovieDetail.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [fetchAsyncMovieDetail.fulfilled]: (state, { payload }) => {
           console.log("MovieDetail Fetched Successfully!",payload)
            state.laoding = false
            state.selectMovieOrShow = payload
            state.success = true
           // return { ...state, selectMovieOrShow: payload }
        },
        [fetchAsyncMovieDetail.rejected]: (state, payload) => {
            state.loading = false
            state.error = payload
        },

        [fetchAsyncShowDetail.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [fetchAsyncShowDetail.fulfilled]: (state, { payload }) => {
            console.log("ShowDetail Fetched Successfully!")
            return { ...state, selectMovieOrShow: payload }
        },
        [fetchAsyncShowDetail.rejected]: (state, payload) => {
            state.loading = false
            state.error = payload
        },
    },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions
// export const userLogin = (state) => state.movies.user
// export const getAllMovies = (state) => state.movies.movies
// export const getAllShows = (state) => state.movies.shows
// export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow
export default movieSlice.reducer