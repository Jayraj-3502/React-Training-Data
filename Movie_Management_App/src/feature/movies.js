import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  popularMovies: [],
  topRatedMovies: [],
  discoverMovies: [],
  trendingMovies: [],
  genreMovies: [],
  genreMoviesPageCount: 0,
  genreDetails: [],
  searchMovies: [],
  searchPageCount: 0,
  searchValue: "",
  movieDetails: {},
  currentGenreId: "28",
};

export const getPopularMovies = createAsyncThunk(
  "movie/getPopularMovies",
  async (page) => {
    console.log("Fetching popular movies for page:", page);
    const responce = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=bc17906574f644dfdbba58c366c22e10&language=en-US&page=${page}`
    );
    if (responce.status !== 200) {
      throw new Error("Something went wrong");
    } else {
      return responce.data;
    }
  }
);

export const getTopRatedMovies = createAsyncThunk(
  "movie/getTopRatedMovies",
  async (page) => {
    console.log("Fetching top rated movies for page:", page);
    const responce = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=bc17906574f644dfdbba58c366c22e10`
    );
    if (responce.status !== 200) {
      throw new Error("Something went wrong");
    } else {
      return responce.data;
    }
  }
);

export const getDiscoverMovies = createAsyncThunk(
  "movie/getDiscoverMovies",
  async (page) => {
    console.log("Fetching descover movies for page:", page);
    const responce = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=bc17906574f644dfdbba58c366c22e10"
    );
    if (responce.status !== 200) {
      throw new Error("Something went wrong");
    } else {
      return responce.data;
    }
  }
);

export const getTrendingMovies = createAsyncThunk(
  "movie/getTrendingMovies",
  async (page) => {
    console.log("Fetching trending movies for page:", page);
    const responce = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=bc17906574f644dfdbba58c366c22e10"
    );
    if (responce.status !== 200) {
      throw new Error("Something went wrong");
    } else {
      return responce.data;
    }
  }
);

export const getGenresDetails = createAsyncThunk(
  "movie/getGenresDetails",
  async () => {
    console.log("Fetching genre details");
    const responce = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=bc17906574f644dfdbba58c366c22e10"
    );
    if (responce.status !== 200) {
      throw new Error("Something went wrong");
    } else {
      console.log(responce.data);
      return responce.data;
    }
  }
);

export const getGenresMovies = createAsyncThunk(
  "movie/getGenresMovies",
  async ({ id = "", page = 1 }) => {
    console.log("Fetching genre movies");
    const responce = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=bc17906574f644dfdbba58c366c22e10&with_genres=${id}&page=${page}`
    );
    if (responce.status !== 200) {
      throw new Error("Something went wrong");
    } else {
      return responce.data;
    }
  }
);

export const getSearchMovies = createAsyncThunk(
  "movie/getSearchMovies",
  async ({ keyword = "", page = "1" }) => {
    console.log("Fetching Search movies for page:", page);

    const responce = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=bc17906574f644dfdbba58c366c22e10&language=en-US&page=${page}`
    );
    if (responce.status !== 200) {
      throw new Error("Something went wrong");
    } else {
      return responce.data;
    }
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

export const getShortByYearMovies = createAsyncThunk(
  "movie/getShortByYearMovies",
  async ({ year = 2025, page = 1 }) => {
    console.log("Fetching genre movies");
    const responce = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=bc17906574f644dfdbba58c366c22e10&language=en-US&sort_by=release_date.desc&primary_release_year=${year}&page=${page}`
    );
    if (responce.status !== 200) {
      throw new Error("Something went wrong");
    } else {
      return responce.data;
    }
  }
);

export const getShortByRatingMovies = createAsyncThunk(
  "movie/getShortByRatingMovies",
  async ({ page = 1 }) => {
    console.log("Fetching genre movies");
    const responce = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=bc17906574f644dfdbba58c366c22e10&language=en-US&sort_by=vote_average.desc&vote_count.gte=200&page=${page}`
    );
    if (responce.status !== 200) {
      throw new Error("Something went wrong");
    } else {
      return responce.data;
    }
  }
);

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setGenreId: (state, action) => {
      state.currentGenreId = action.payload;
    },

    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPopularMovies.pending, (state, action) => {})
      .addCase(getPopularMovies.fulfilled, (state, action) => {
        state.popularMovies = action.payload.results;
        console.log(action.payload);
      })
      .addCase(getPopularMovies.rejected, (state, action) => {
        state.popularMovies = [];
      })

      .addCase(getTopRatedMovies.pending, (state, action) => {})
      .addCase(getTopRatedMovies.fulfilled, (state, action) => {
        state.topRatedMovies = action.payload.results;
        console.log(action.payload);
      })
      .addCase(getTopRatedMovies.rejected, (state, action) => {
        state.topRatedMovies = [];
      })

      .addCase(getDiscoverMovies.pending, (state, action) => {})
      .addCase(getDiscoverMovies.fulfilled, (state, action) => {
        state.discoverMovies = action.payload.results;
        console.log(action.payload);
      })
      .addCase(getDiscoverMovies.rejected, (state, action) => {
        state.discoverMovies = [];
      })

      .addCase(getTrendingMovies.pending, (state, action) => {})
      .addCase(getTrendingMovies.fulfilled, (state, action) => {
        state.trendingMovies = action.payload.results;
        console.log(action.payload);
      })
      .addCase(getTrendingMovies.rejected, (state, action) => {
        state.trendingMovies = [];
      })

      .addCase(getGenresDetails.pending, (state, action) => {})
      .addCase(getGenresDetails.fulfilled, (state, action) => {
        state.genreDetails = action.payload.genres;
        console.log(action.payload.genres);
      })
      .addCase(getGenresDetails.rejected, (state, action) => {
        state.genreDetails = [];
      })

      .addCase(getGenresMovies.pending, (state, action) => {})
      .addCase(getGenresMovies.fulfilled, (state, action) => {
        state.genreMovies = action.payload.results;
        state.genreMoviesPageCount = action.payload.total_pages;
        console.log(action.payload.results);
      })
      .addCase(getGenresMovies.rejected, (state, action) => {
        state.genreMovies = [];
      })

      .addCase(getShortByYearMovies.pending, (state, action) => {})
      .addCase(getShortByYearMovies.fulfilled, (state, action) => {
        state.genreMovies = action.payload.results;
        state.genreMoviesPageCount = action.payload.total_pages;
        console.log(action.payload.results);
      })
      .addCase(getShortByYearMovies.rejected, (state, action) => {
        state.genreMovies = [];
      })

      .addCase(getShortByRatingMovies.pending, (state, action) => {})
      .addCase(getShortByRatingMovies.fulfilled, (state, action) => {
        state.genreMovies = action.payload.results;
        state.genreMoviesPageCount = action.payload.total_pages;
        console.log(action.payload.results);
      })
      .addCase(getShortByRatingMovies.rejected, (state, action) => {
        state.genreMovies = [];
      })

      .addCase(getSearchMovies.pending, (state, action) => {})
      .addCase(getSearchMovies.fulfilled, (state, action) => {
        state.searchMovies = action.payload.results;
        state.searchPageCount = action.payload.total_pages;
        console.log(action.payload);
      })
      .addCase(getSearchMovies.rejected, (state, action) => {
        state.trendingMovies = [];
      })

      .addCase(getMovieDetails.pending, (state, action) => {})
      .addCase(getMovieDetails.fulfilled, (state, action) => {
        state.movieDetails = action.payload;
        console.log(action.payload);
      })
      .addCase(getMovieDetails.rejected, (state, action) => {});
  },
});

export const movieReducer = movieSlice.reducer;
export const { setGenreId, setSearchValue } = movieSlice.actions;
