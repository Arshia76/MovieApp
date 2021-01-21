import React, { Fragment, useContext, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import movieContext from '../context/movieContext';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Typography } from '@material-ui/core';
import NowPlayingItem from './NowPlayingItem';
import { useHistory } from 'react-router-dom';
const NowPlaying = () => {
  const context = useContext(movieContext);
  const history = useHistory();
  useEffect(() => {
    context.getNowPlayingMovies(1);
    //eslint-disable-next-line
  }, []);
  const goPagination = () => {
    history.push({
      pathname: '/pagination',
      state: {
        title: 'NOW PLAYING',
      },
    });
  };
  return (
    <Fragment>
      <Typography
        variant='h2'
        style={{
          color: 'orange',
          margin: '1rem 0',
        }}
      >
        Now Playing
      </Typography>
      <Typography
        variant='h5'
        onClick={goPagination}
        style={{ cursor: 'pointer', color: 'orange', margin: '1rem 0' }}
      >
        View All
      </Typography>
      <OwlCarousel
        dots={false}
        nav={true}
        responsive={{
          0: {
            items: 2,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 4,
          },
        }}
        margin={15}
        className='owl-theme'
      >
        {context.nowPlayingMovies.map((nowMovie) => {
          return (
            <NowPlayingItem
              key={nowMovie.id}
              id={nowMovie.id}
              img={nowMovie.poster_path}
              title={nowMovie.title}
              rating={nowMovie.vote_average}
            />
          );
        })}
      </OwlCarousel>
    </Fragment>
  );
};

export default NowPlaying;
