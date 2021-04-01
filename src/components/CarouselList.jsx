import React, { useEffect, useContext, Fragment } from 'react';
import { Box, Typography } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import movieContext from '../context/movieContext';
import CarouselItem from './CarouselItem';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import '../App.css';
import Loader from './Loader/Loader';

const useStyles = makeStyles({
  carousel: {
    marginTop: '1rem',
    height: '65vh',
  },
  text: {
    color: 'orange',
    textAlign: 'center',
  },
});

const CarouselList = () => {
  const classes = useStyles();
  const context = useContext(movieContext);
  const history = useHistory();
  useEffect(() => {
    context.getUpcomingMovies();
    //eslint-disable-next-line
  }, []);

  const goPagination = () => {
    context.setLoading();
    history.push({
      pathname: '/pagination',
      state: {
        title: 'UPCOMING',
      },
    });
  };

  return (
    <Fragment>
      {context.loading ? (
        <Loader />
      ) : (
        <Box style={{ padding: '1rem 0' }}>
          <Typography className={classes.text} variant='h5'>
            UPCOMING MOVIES
          </Typography>
          <Typography
            variant='h5'
            onClick={goPagination}
            style={{ cursor: 'pointer', color: 'orange', margin: '1rem 0' }}
          >
            View All
          </Typography>
          <Carousel
            navButtonsAlwaysVisible
            indicators={false}
            className={classes.carousel}
          >
            {context.upcomingMovies &&
              context.upcomingMovies.map((upMovie) => {
                return (
                  <CarouselItem
                    key={upMovie.id}
                    title={upMovie.title}
                    img={upMovie.backdrop_path}
                    id={upMovie.id}
                  />
                );
              })}
          </Carousel>
        </Box>
      )}
    </Fragment>
  );
};

export default CarouselList;
