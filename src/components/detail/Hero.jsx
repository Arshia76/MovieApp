import React, { useContext } from 'react';
import { Box } from '@material-ui/core';
import movieContext from '../../context/movieContext';
import { makeStyles } from '@material-ui/core/styles';
import Loader from '../Loader/Loader';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '200px',
      margin: '0 auto',
    },

    [theme.breakpoints.up('sm')]: {
      width: '600px',
      height: '300px',
    },
  },
}));

const Hero = () => {
  const context = useContext(movieContext);
  const classes = useStyles();
  return (
    <Box
      style={{
        textAlign: 'center',
        marginBottom: '1.5rem',
        paddingTop: '2rem',
      }}
    >
      {context.video ? (
        <iframe
          title='movie trailer'
          className={classes.root}
          src={`https://www.youtube.com/embed/${context.video}`}
        ></iframe>
      ) : (
        <Loader />
      )}
    </Box>
  );
};

export default Hero;
