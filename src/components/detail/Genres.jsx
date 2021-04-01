import React, { useContext } from 'react';
import { Box, Chip } from '@material-ui/core';
import movieContext from '../../context/movieContext';
import Loader from '../Loader/Loader';

const Genres = () => {
  const context = useContext(movieContext);

  return (
    <Box>
      {context.loading ? (
        <Loader />
      ) : (
        context.detail.genres.map((genre) => {
          return <Chip label={genre.name} />;
        })
      )}
    </Box>
  );
};

export default Genres;
