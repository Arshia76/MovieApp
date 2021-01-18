import React, { Fragment, useContext } from 'react';
import OwlCarousel from 'react-owl-carousel';
import movieContext from '../context/movieContext';
import CategoryItem from './CategoryItem';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Typography } from '@material-ui/core';

const Category = () => {
  const context = useContext(movieContext);
  return (
    <Fragment>
      <Typography
        variant='h2'
        style={{
          color: 'orange',
          margin: '1rem 0',
        }}
      >
        {context.genre}
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
        {context.genreMovies.map((genMovie) => {
          return (
            <CategoryItem
              key={genMovie.id}
              id={genMovie.id}
              img={genMovie.poster_path}
              title={genMovie.title}
              rating={genMovie.vote_average}
            />
          );
        })}
      </OwlCarousel>
    </Fragment>
  );
};

export default Category;
