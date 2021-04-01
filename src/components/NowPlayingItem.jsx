import React, { useContext } from 'react';
import { Paper, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReactStars from 'react-stars';
import { withRouter } from 'react-router-dom';
import movieContext from '../context/movieContext';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: '1rem 0',
    border: '2px solid orange',
  },
  image: {
    height: '18rem',
    cursor: 'pointer',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
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
}));

const NowPlayingItem = ({ id, img, title, rating, history }) => {
  const context = useContext(movieContext);
  const goDetial = () => {
    context.setLoading();
    history.push({ pathname: `/detail/${id}`, state: { img } });
  };
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Paper className={classes.paper}>
        <img
          className={classes.image}
          src={`https://image.tmdb.org/t/p/w500/${img}`}
          alt='movie-posters'
          onClick={goDetial}
        />
      </Paper>
      <Box>
        <Typography className={classes.text2}>{title}</Typography>
        <Typography className={classes.text}>Rating: {rating}</Typography>
        <ReactStars
          className={classes.star}
          count={rating}
          size={20}
          color1={'#f4c10f'}
        ></ReactStars>
      </Box>
    </Box>
  );
};

export default withRouter(NowPlayingItem);
