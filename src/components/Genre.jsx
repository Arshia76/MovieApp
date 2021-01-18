import React, { useContext, useEffect } from 'react';
import movieContext from '../context/movieContext';
import { Chip } from '@material-ui/core';

const Genre = ({ genre }) => {
  const context = useContext(movieContext);

  useEffect(() => {
    context.moviesByGenre(27);
    context.setGenre('Horror');
    //eslint-disable-next-line
  }, []);

  const handleClick = async () => {
    await context.moviesByGenre(genre.id);
    context.setGenre(genre.name);
  };
  return (
    <Chip
      onClick={handleClick}
      label={genre.name}
      style={{ marginRight: '1rem', marginTop: '1rem' }}
    />
  );
};

export default Genre;