import React, { useContext, Fragment } from 'react';
import movieContext from '../../context/movieContext';
import { Typography, Grid } from '@material-ui/core';
import SimilarItem from './SimilarItem';

const Similar = () => {
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
  );
};

export default Similar;
