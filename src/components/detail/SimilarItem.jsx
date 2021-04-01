import React, { useContext } from 'react';
import { Paper, Typography, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReactStars from 'react-stars';
import { withRouter } from 'react-router-dom';
import movieContext from '../../context/movieContext';

const useStyles = makeStyles({
  paper: {
    margin: '1rem 0',
    border: '2px solid orange',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '18rem',
    cursor: 'pointer',
  },

  text: {
    marginTop: '.8rem',
    marginLeft: '.3rem',
    color: 'white',
  },
  text2: {
    marginLeft: '.3rem',
    marginTop: '.8rem',
    color: 'white',
  },
  star: {
    marginLeft: '.3rem',
    marginTop: '.4rem',
  },
});

const SimilarItem = ({ id, img, title, rating, history }) => {
  const context = useContext(movieContext);
  const goDetial = () => {
    context.setLoading();
    history.push({ pathname: `/detail/${id}`, state: { img } });
  };
  const classes = useStyles();
  return (
    <Grid item xs={10} sm={6} md={4} lg={3} style={{ margin: ' auto' }}>
      <Paper className={classes.paper}>
        <img
          className={classes.image}
          src={`https://image.tmdb.org/t/p/w500/${img}`}
          alt='movie-posters'
          onClick={goDetial}
        />
      </Paper>

      <Box style={{ height: '12rem', overflow: 'hidden' }}>
        <Typography className={classes.text2}>{title}</Typography>
        <Typography className={classes.text}>Rating: {rating}</Typography>
        <ReactStars
          className={classes.star}
          count={rating}
          size={20}
          color1={'#f4c10f'}
        ></ReactStars>
      </Box>
    </Grid>
  );
};

export default withRouter(SimilarItem);
