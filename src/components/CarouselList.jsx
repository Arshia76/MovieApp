import React, { useEffect, useContext } from 'react';
import { Box, Typography } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import movieContext from '../context/movieContext';
import CarouselItem from './CarouselItem';
import { makeStyles } from '@material-ui/core/styles';
import '../App.css';

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
  useEffect(() => {
    context.getUpcomingMovies();
    //eslint-disable-next-line
  }, []);

  return (
    <Box style={{ padding: '1rem 0' }}>
      <Typography className={classes.text} variant='h3'>
        UPCOMING MOVIES
      </Typography>
      <Carousel
        navButtonsAlwaysVisible
        indicators={false}
        className={classes.carousel}
      >
        {context.upcomingMovies.map((upMovie) => {
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
  );
};

export default CarouselList;
