import { Grid, Typography, Box } from '@material-ui/core';
import React, { useState, useContext, useEffect } from 'react';
import PaginationItem from '../components/pagination/PaginationItem';
import Paginator from 'react-js-pagination';
import movieContext from '../context/movieContext';
import Loader from '../components/Loader/Loader';

const Pagination = ({ location }) => {
  const [activePage, setActivepage] = useState(1);
  const context = useContext(movieContext);
  const { title, id } = location.state;
  useEffect(() => {
    if (title === 'NOW PLAYING') {
      context.getNowPlayingMovies(activePage);
    } else if (title === 'UPCOMING') {
      context.getUpcomingMovies(activePage);
    } else if (title === 'TOP RATED') {
      context.getTopRatedMovies(activePage);
    } else {
      context.moviesByGenre(id, activePage);
    }

    //eslint-disable-next-line
  }, [activePage, context]);
  const onChange = (page) => {
    context.setLoading();
    setActivepage(page);
  };
  return (
    <Box style={{ textAlign: 'center' }}>
      <Typography
        variant='h5'
        style={{
          color: 'orange',
          margin: '1rem 0',
        }}
      >
        {title}
      </Typography>
      <Grid
        container
        spacing={2}
        style={{
          padding: '1rem',
          overflow: 'hidden',
          width: '100%',
        }}
      >
        {context.loading ? (
          <Loader />
        ) : title === 'NOW PLAYING' ? (
          context.nowPlayingMovies.map((movie) => {
            return (
              <PaginationItem
                key={movie.id}
                id={movie.id}
                img={movie.backdrop_path}
                title={movie.title}
                rating={movie.vote_average}
              />
            );
          })
        ) : title === 'UPCOMING' ? (
          context.upcomingMovies.map((movie) => {
            return (
              <PaginationItem
                key={movie.id}
                id={movie.id}
                img={movie.backdrop_path}
                title={movie.title}
                rating={movie.vote_average}
              />
            );
          })
        ) : title === 'TOP RATED' ? (
          context.topRatedMovies.map((movie) => {
            return (
              <PaginationItem
                key={movie.id}
                id={movie.id}
                img={movie.backdrop_path}
                title={movie.title}
                rating={movie.vote_average}
              />
            );
          })
        ) : (
          context.genreMovies.map((movie) => {
            return (
              <PaginationItem
                key={movie.id}
                id={movie.id}
                img={movie.backdrop_path}
                title={movie.title}
                rating={movie.vote_average}
              />
            );
          })
        )}
      </Grid>
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '3rem 0',
          width: '100%',
        }}
      >
        <Paginator
          activePage={activePage}
          itemsCountPerPage={20}
          totalItemsCount={500}
          pageRangeDisplayed={5}
          onChange={onChange}
        />
      </Box>
    </Box>
  );
};

export default Pagination;
