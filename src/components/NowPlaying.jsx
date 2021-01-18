import React, { Fragment, useContext, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import movieContext from '../context/movieContext';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Typography } from '@material-ui/core';
import NowPlayingItem from './NowPlayingItem';
const NowPlaying = () => {
  const context = useContext(movieContext);
  useEffect(() => {
    context.getNowPlayingMovies();
    //eslint-disable-next-line
  }, []);
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
