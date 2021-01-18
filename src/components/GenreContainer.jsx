import React, { useContext, useEffect } from 'react';
import { Box } from '@material-ui/core';
import movieContext from '../context/movieContext';
import Genre from './Genre';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

const GenreContainer = () => {
  const context = useContext(movieContext);
  useEffect(() => {
    context.getGenres();
    //eslint-disable-next-line
  }, []);

  return (
    <Box style={{ textAlign: 'center' }}>
      <OwlCarousel
        dots={false}
        loop={true}
        nav={true}
        responsive={{
          0: {
            items: 2,
          },
          600: {
            items: 4,
          },
          1000: {
            items: 6,
          },
        }}
        className='owl-theme'
      >
        {context.genres.map((genre) => {
          return <Genre key={genre.id} genre={genre} />;
        })}
      </OwlCarousel>
    </Box>
  );
};

export default GenreContainer;
