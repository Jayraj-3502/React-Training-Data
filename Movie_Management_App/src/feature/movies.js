import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  popularMovies: [],
  latestMovies: [],
  movieDetails: {},
};

export const getPopularMovies = createAsyncThunk(
  "movie/getPopularMovies",
  async (page) => {
    const responce = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=bc17906574f644dfdbba58c366c22e10&language=en-US&page=${page}`
    );
    return responce.data;
  }
);

export const getLatestMovies = createAsyncThunk(
  "movie/getLatestMovies",
  async () => {
    const responce = await axios.get(
      "https://api.themoviedb.org/3/movie/latest?api_key=bc17906574f644dfdbba58c366c22e10&language=en-US&page=1"
    );
    return responce.data;
  }
);

export const getMovieDetails = createAsyncThunk(
  "movie/getMovieDetails",
  async (id) => {
    const responce = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=bc17906574f644dfdbba58c366c22e10&language=en-US`
    );
    return responce.data;
  }
);

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPopularMovies.pending, (state, action) => {})
      .addCase(getPopularMovies.fulfilled, (state, action) => {
        state.popularMovies = action.payload.results;
        console.log(action.payload);
      })
      .addCase(getPopularMovies.rejected, (state, action) => {})

      .addCase(getLatestMovies.pending, (state, action) => {})
      .addCase(getLatestMovies.fulfilled, (state, action) => {
        state.latestMovies = action.payload.results;
        console.log(action.payload);
      })
      .addCase(getLatestMovies.rejected, (state, action) => {})

      .addCase(getMovieDetails.pending, (state, action) => {})
      .addCase(getMovieDetails.fulfilled, (state, action) => {
        state.movieDetails = action.payload;
        console.log(action.payload);
      })
      .addCase(getMovieDetails.rejected, (state, action) => {});
  },
});

export const movieReducer = movieSlice.reducer;
