import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { findAllInRenderedTree } from "react-dom/test-utils";
// import movieApi from "../../utlis/apis/movieApi"
// import { APIKey } from "../../utlis/apis/movieApiKey"
import API from "../../../utlis/API"

export const fetchAsyncLogin = createAsyncThunk(
    "login/fetchAsyncLogin",
    async ({ email, password }) => {
        try {
            const response = await API.post("/login", { email, password })
            console.log("---res", response.data);
            let  token  = response.data.token
            // console.log("token===>",token);
            localStorage.setItem("token",token)
            let message = response?.data?.message;
            alert(`${message}`)
        } catch (error) {
            let message = error?.response?.data?.message;
            alert(`${message}`)
            // console.log(message);
        }
    }
)

export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies",
    async (term) => {
        const response = await API.get(
            `?apiKey=${API}&s=${term}&type=movie`
        )
        return response.data
    }
)

export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    async (term) => {
        const response = await API.get(
            `?apiKey=${API}&s=${term}&type=series`
        )
        return response.data
    }
)

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    "movies/fetchAsyncMovieOrShowDetail",
    async (id) => {
        const response = await API.get(`?apiKey=${API}&i=${id}&Plot=full`)
        return response.data
    }
);

const userToken = localStorage.getItem("token")

const initialState = {
    user: null,
    movies: {},
    shows: {},
    selectMovieOrShow: {},
    loading: false,
    success: false,
    // userToken,
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
            console.log("Fetched Successfully!")
            console.log("payload",{payload})
            state.laoding = false
            state.user = payload
            state.success = true
            // state.userToken = payload.userToken
        },
        [fetchAsyncLogin.rejected]: (state, payload) => {
            state.loading = false
            state.error = payload
        },

        [fetchAsyncMovies.pending]: () => {
            console.log("Pending")
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!")
            return { ...state, movies: payload }
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected!")
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!")
            return { ...state, shows: payload }
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!")
            return { ...state, selectMovieOrShow: payload }
        },
    },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions
export const userLogin =(state)=> state.movies.user
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow
export default movieSlice.reducer