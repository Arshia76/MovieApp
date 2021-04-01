import React, { useContext, Fragment } from 'react';
import movieContext from '../../context/movieContext';
import { Typography, Grid } from '@material-ui/core';
import SimilarItem from './SimilarItem';
import Loader from '../Loader/Loader';

const Similar = () => {
  const context = useContext(movieContext);
  return (
    <Fragment>
      {context.loading ? (
        <Loader />
      ) : context.similarMovies && context.similarMovies.length > 0 ? (
        <Fragment>
          <Typography
            variant='h5'
            style={{
              color: 'orange',
              margin: '1rem 0',
            }}
          >
            Similar Movies
          </Typography>
          <Grid container spacing={2}>
            {context.similarMovies.slice(0, 4).map((simMovie) => {
              return (
                <SimilarItem
                  key={simMovie.id}
                  id={simMovie.id}
                  img={simMovie.poster_path}
                  title={simMovie.title}
                  rating={simMovie.vote_average}
                />
              );
            })}
          </Grid>
        </Fragment>
      ) : null}
    </Fragment>
  );
};

export default Similar;
