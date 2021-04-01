import * as types from './types';

export default (state, action) => {
  switch (action.type) {
    case types.UPCOMING_MOVIES:
      return {
        ...state,
        upcomingMovies: action.payload,
        loading: false,
      };

    case types.VIDEOS:
      return {
        ...state,
        video: action.payload,
        loading: false,
      };

    case types.SIMILAR_MOVIES:
      return {
        ...state,
        similarMovies: action.payload,
        loading: false,
      };

    case types.SEARCH:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };

    case types.ALL_GENRES:
      return {
        ...state,
        genres: action.payload,
        loading: false,
      };

    case types.MOVIES_BY_GENRE:
      return {
        ...state,
        genreMovies: action.payload,
        loading: false,
      };

    case types.NOW_PLAYING:
      return {
        ...state,
        nowPlayingMovies: action.payload,
        loading: false,
      };

    case types.SET_GENRE:
      return {
        ...state,
        genreName: action.payload.genreName,
        genreId: action.payload.genreId,
        loading: false,
      };

    case types.TOP_RATED:
      return {
        ...state,
        topRatedMovies: action.payload,
        loading: false,
      };

    case types.CAST:
      return {
        ...state,
        casts: action.payload,
        loading: false,
      };

    case types.MOVIE_DETAIL:
      return {
        ...state,
        detail: action.payload,
        loading: false,
      };

    case types.LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
