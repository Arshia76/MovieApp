import React, { useContext, useEffect } from 'react';
import { Box, Chip } from '@material-ui/core';
import movieContext from '../../context/movieContext';

const Genres = () => {
  const context = useContext(movieContext);

  return (
    <Box>
      {context.detail.genres.map(genre => {
        return <Chip label={genre.name} />;
      })}
    </Box>
  );
};

export default Genres;
