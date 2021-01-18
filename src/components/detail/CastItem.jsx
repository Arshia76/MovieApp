import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    margin: '1rem 0',
  },
  image: {
    borderRadius: '50%',
    width: '8rem',
    height: '8rem',
    marginBottom: '.5rem',
  },
  typography: {
    color: 'white',
    fontSize: '14px',
  },
});

const CastItem = ({ image, name, character }) => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.container}
      justify='center'
      align='center'
      item
      direction='column'
      xs={12}
      sm={6}
      md={3}
    >
      <img
        className={classes.image}
        src={`https://image.tmdb.org/t/p/original/${image}`}
        alt='character'
      />

      <Typography className={classes.typography}>{name}</Typography>

      <Typography style={{ marginTop: '.5rem' }} className={classes.typography}>
        {character}
      </Typography>
    </Grid>
  );
};

export default CastItem;
