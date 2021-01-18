import React, { useReducer } from 'react';
import axios from 'axios';
import movieContext from './movieContext';
import movieReducer from './movieReducer';

import * as types from './types';

const MovieState = (props) => {
  const initialState = {
    upcomingMovies: [],
    topRatedMovies: [],
    movies: [],
    nowPlayingMovies: [],
    similarMovies: [],
    genreMovies: [],
    video: '',
    genres: [],
    casts: [],
    detail: {},
    genre: '',
  };

  const [state, dispatch] = useReducer(movieReducer, initialState);

  //different methods are going to br  implemented  here

  const getUpcomingMovies = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API}&language=en-US&page=1`
    );
    const data = res.data.results;

    dispatch({
      type: types.UPCOMING_MOVIES,
      payload: data,
    });
  };

  const searchMovies = async (name) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        process.env.REACT_APP_API
      }&language=en-US&page=1&query=${encodeURI(name)}`
    );

    const data = res.data.results;

    dispatch({
      type: types.SEARCH,
      payload: data,
    });
  };

  const getNowPlayingMovies = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API}&language=en-US&page=1`
    );
    const data = res.data.results;

    dispatch({
      type: types.NOW_PLAYING,
      payload: data,
    });
  };
  const getSimilarMovies = async (movieId) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${process.env.REACT_APP_API}&language=en-US&page=1`
    );
    const data = res.data.results;

    dispatch({
      type: types.SIMILAR_MOVIES,
      payload: data,
    });
  };

  const setGenre = (genre) => {
    dispatch({
      type: types.SET_GENRE,
      payload: genre,
    });
  };
  const getMovieVideos = async (movieId) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_API}&language=en-US`
    );

    const data = res.data.results;

    data[0] !== undefined &&
      dispatch({
        type: types.VIDEOS,
        payload: data[0].key,
      });
  };

  const getGenres = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API}&language=en-US`
    );

    const data = res.data.genres;

    dispatch({
      type: types.ALL_GENRES,
      payload: data,
    });
  };

  const moviesByGenre = async (genre) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API}&language=en-US&page=1&with_genres=${genre}`
    );

    const data = res.data.results;

    dispatch({
      type: types.MOVIES_BY_GENRE,
      payload: data,
    });
  };

  const getTopRatedMovies = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API}&language=en-US&page=1`
    );

    const data = res.data.results;

    dispatch({
      type: types.TOP_RATED,
      payload: data,
    });
  };

  const getCast = async (movieId) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_API}`
    );

    const data = res.data.cast;

    dispatch({
      type: types.CAST,
      payload: data,
    });
  };

  const getMovieDetail = async (movieId) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API}&language=en-US`
    );

    const data = res.data;

    dispatch({
      type: types.MOVIE_DETAIL,
      payload: data,
    });
  };

  return (
    <movieContext.Provider
      value={{
        upcomingMovies: state.upcomingMovies,
        topRatedMovies: state.topRatedMovies,
        genreMovies: state.genreMovies,
        nowPlayingMovies: state.nowPlayingMovies,
        similarMovies: state.similarMovies,
        video: state.video,
        movies: state.movies,
        genres: state.genres,
        casts: state.casts,
        detail: state.detail,
        genre: state.genre,
        getUpcomingMovies,
        searchMovies,
        getNowPlayingMovies,
        getMovieVideos,
        getSimilarMovies,
        getGenres,
        getCast,
        getMovieDetail,
        getTopRatedMovies,
        moviesByGenre,
        setGenre,
      }}
    >
      {props.children}
    </movieContext.Provider>
  );
};

export default MovieState;
