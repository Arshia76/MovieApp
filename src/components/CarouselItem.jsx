import React, { useContext } from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import movieContext from '../context/movieContext';

const useStyles = makeStyles((theme) => ({
  image: {
    width: '100%',
    height: '65vh',
    filter: 'brightness(50%)',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      height: '20rem',
    },
  },
  text: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    color: 'orange',
    transform: 'translate(-50%,-50%)',
    elevation: '3',
    textShadow: '1rem 1rem 1rem orange',
    fontSize: '2rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  paper: {
    height: '65vh',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      height: '20rem',
    },
  },
}));

const CarouselItem = ({ img, title, history, id }) => {
  const classes = useStyles();
  const context = useContext(movieContext);
  const goDetial = () => {
    context.setLoading();
    history.push({ pathname: `/detail/${id}`, state: { img } });
  };
  return (
    <Paper className={classes.paper}>
      <img
        className={classes.image}
        src={`https://image.tmdb.org/t/p/w500/${img}`}
        alt='aks-movie'
        onClick={goDetial}
      />
      <Typography className={classes.text}>{title}</Typography>
    </Paper>
  );
};

export default withRouter(CarouselItem);
