import React, { useContext } from 'react';
import { Typography, Grid } from '@material-ui/core';
import ReactStars from 'react-stars';
import movieContext from '../../context/movieContext';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  headers: {
    color: 'orange',
  },
  paragraph: {
    color: 'white',
    margin: '.5rem 0',
  },
});

const Overal = () => {
  const classes = useStyles();
  const context = useContext(movieContext);

  return (
    <Grid container spacing={10} direction='column' justify='space-between'>
      <Grid item>
        <ReactStars
          count={context.detail.vote_average}
          size={20}
          color1={'#f4c10f'}
        />

        <Typography
          style={{ marginTop: '1rem' }}
          variant='h4'
          className={classes.headers}
        >
          Overview
        </Typography>
        <Typography style={{ color: 'white' }}>
          {context.detail.overview}
        </Typography>
      </Grid>

      <Grid container item spacing={10} justify='space-between' align='center'>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant='h6' className={classes.headers}>
            Release Date
          </Typography>
          <Typography className={classes.paragraph}>
            {context.detail.release_date}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant='h6' className={classes.headers}>
            Runtime
          </Typography>
          <Typography className={classes.paragraph}>
            {context.detail.runtime}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant='h6' className={classes.headers}>
            Budget
          </Typography>
          <Typography className={classes.paragraph}>
            {context.detail.budget}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant='h6' className={classes.headers}>
            Homepage
          </Typography>
          <Typography
            className={classes.paragraph}
            style={{ overflowWrap: 'break-word' }}
          >
            {context.detail.homepage}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Overal;
