import React from 'react';
import CarouselList from '../components/CarouselList';
import GenreContainer from '../components/GenreContainer';
import Category from '../components/Category';
import { Container } from '@material-ui/core';
import TopRated from '../components/TopRated';
import NowPlaying from '../components/NowPlaying';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },

    [theme.breakpoints.up('sm')]: {
      width: '70%',
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <CarouselList />
      <GenreContainer />
      <Category />
      <NowPlaying />
      <TopRated />
    </Container>
  );
};

export default Home;
