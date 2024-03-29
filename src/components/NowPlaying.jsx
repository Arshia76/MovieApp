import React, { Fragment, useContext, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import movieContext from '../context/movieContext';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Typography } from '@material-ui/core';
import NowPlayingItem from './NowPlayingItem';
import { useHistory } from 'react-router-dom';
import Loader from './Loader/Loader';
const NowPlaying = () => {
  const context = useContext(movieContext);
  const history = useHistory();
  useEffect(() => {
    context.getNowPlayingMovies();
    //eslint-disable-next-line
  }, []);
  const goPagination = () => {
    context.setLoading();
    history.push({
      pathname: '/pagination',
      state: {
        title: 'NOW PLAYING',
      },
    });
  };
  return (
    <Fragment>
      {context.loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Typography
            variant='h5'
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
                items: 1,
              },
              400: {
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
            {context.nowPlayingMovies &&
              context.nowPlayingMovies.map((nowMovie) => {
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
      )}
    </Fragment>
  );
};

export default NowPlaying;
