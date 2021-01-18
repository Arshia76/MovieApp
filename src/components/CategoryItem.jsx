import React from 'react';
import { Paper, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReactStars from 'react-stars';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles({
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
    alignItems: 'start',
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

const CategoryItem = ({ id, img, title, rating, history }) => {
  const goDetail = () => {
    history.push({ pathname: `/detail/${id}`, state: { img } });
  };
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Paper className={classes.paper}>
        <img
          className={classes.image}
          src={`https://image.tmdb.org/t/p/original/${img}`}
          alt='movie-posters'
          onClick={goDetail}
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

export default withRouter(CategoryItem);
