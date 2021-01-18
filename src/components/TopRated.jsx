import React, { Fragment, useContext, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import movieContext from '../context/movieContext';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Typography } from '@material-ui/core';
import TopRatedItem from './TopRatedItem';
const TopRated = () => {
  const context = useContext(movieContext);
  useEffect(() => {
    context.getTopRatedMovies();
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
        Top Rated
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
        {context.topRatedMovies.map((topMovie) => {
          return (
            <TopRatedItem
              key={topMovie.id}
              id={topMovie.id}
              img={topMovie.poster_path}
              title={topMovie.title}
              rating={topMovie.vote_average}
            />
          );
        })}
      </OwlCarousel>
    </Fragment>
  );
};

export default TopRated;