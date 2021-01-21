import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles({
  image: {
    width: '100%',
    height: '65vh',
    filter: 'brightness(50%)',
    cursor: 'pointer',
  },
  text: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    color: 'orange',
    transform: 'translate(-50%,-50%)',
    elevation: '3',
    textShadow: '1rem 1rem 1rem orange',
  },
  paper: {
    height: '65vh',
    position: 'relative',
  },
});

const CarouselItem = ({ img, title, history, id }) => {
  const classes = useStyles();
  const goDetial = () => {
    history.push({ pathname: `/detail/${id}`, state: { img } });
  };
  return (
    <Paper className={classes.paper}>
      <img
        className={classes.image}
        src={`https://image.tmdb.org/t/p/original/${img}`}
        alt='aks-movie'
        onClick={goDetial}
      />
      <Typography className={classes.text} variant='h5'>
        {title}
      </Typography>
    </Paper>
  );
};

export default withRouter(CarouselItem);
