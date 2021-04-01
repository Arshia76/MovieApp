import React, { useContext, Fragment } from 'react';
import CastItem from './CastItem';
import movieContext from '../../context/movieContext';
import { Grid, Typography } from '@material-ui/core';
import Loader from '../Loader/Loader';
const Cast = () => {
  const context = useContext(movieContext);
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
              margin: '1.5rem 0',
            }}
          >
            Cast
          </Typography>
          <Grid container spacing={2}>
            {context.casts.slice(0, 4).map((cast) => {
              return (
                <CastItem
                  key={cast.id}
                  image={cast.profile_path}
                  name={cast.name}
                  character={cast.character}
                />
              );
            })}
          </Grid>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Cast;
