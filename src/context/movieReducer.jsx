import * as types from './types';

export default (state, action) => {
  switch (action.type) {
    case types.UPCOMING_MOVIES:
      return {
        ...state,
        upcomingMovies: action.payload,
      };

    case types.VIDEOS:
      return {
        ...state,
        video: action.payload,
      };

    case types.SIMILAR_MOVIES:
      return {
        ...state,
        similarMovies: action.payload,
      };

    case types.SEARCH:
      return {
        ...state,
        movies: action.payload,
      };

    case types.ALL_GENRES:
      return {
        ...state,
        genres: action.payload,
      };

    case types.MOVIES_BY_GENRE:
      return {
        ...state,
        genreMovies: action.payload,
      };

    case types.NOW_PLAYING:
      return {
        ...state,
        nowPlayingMovies: action.payload,
      };

    case types.SET_GENRE:
      return {
        ...state,
        genreName: action.payload.genreName,
        genreId: action.payload.genreId,
      };

    case types.TOP_RATED:
      return {
        ...state,
        topRatedMovies: action.payload,
      };

    case types.CAST:
      return {
        ...state,
        casts: action.payload,
      };

    case types.MOVIE_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    default:
      return state;
  }
};
