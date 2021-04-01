import React, { Fragment, useContext } from 'react';
import OwlCarousel from 'react-owl-carousel';
import movieContext from '../context/movieContext';
import CategoryItem from './CategoryItem';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Loader from './Loader/Loader';

const Category = () => {
  const context = useContext(movieContext);
  const history = useHistory();
  const goPagination = () => {
    context.setLoading();
    history.push({
      pathname: '/pagination',
      state: {
        title: context.genreName,
        id: context.genreId,
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
            {context.genreName}
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
      )}
    </Fragment>
  );
};

export default Category;
