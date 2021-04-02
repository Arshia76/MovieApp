import React, { useEffect, useContext } from 'react';
import movieContext from '../context/movieContext';
import { Container, Box } from '@material-ui/core';
import Cast from '../components/detail/Cast';
import Hero from '../components/detail/Hero';
import Overal from '../components/detail/Overal';
import Similar from '../components/detail/Similar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      zIndex: 1,
      textAlign: 'center',
      overflow: 'hidden',
    },

    [theme.breakpoints.down('md')]: {
      width: '100%',
      zIndex: 1,
      textAlign: 'center',
      overflow: 'hidden',
    },

    [theme.breakpoints.up('md')]: {
      width: '60vw',
      zIndex: 1,
    },
  },
}));

const Detail = ({ match, location }) => {
  const context = useContext(movieContext);
  useEffect(() => {
    context.getMovieVideos(match.params.id);
    context.getMovieDetail(match.params.id);
    context.getCast(match.params.id);
    context.getSimilarMovies(match.params.id);
    //eslint-disable-next-line
  }, [match.params.id]);

  const { img } = location.state;

  const classes = useStyles();
  return (
    <Box
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '100% 100%',
        overflow: 'hidden',
        backgroundBlendMode: 'multiply',
        backgroundColor: 'blue',
        height: '100%',
      }}
    >
      <Container className={classes.root}>
        <Hero />
        <Overal />
        <Cast />
        <Similar />
      </Container>
    </Box>
  );
};

export default Detail;
