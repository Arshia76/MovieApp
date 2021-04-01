import { Grid, Typography, Box } from '@material-ui/core';
import React, { useContext } from 'react';
import movieContext from '../context/movieContext';
import SearchItem from '../components/search/SearchItem';
import Loader from '../components/Loader/Loader';

const Search = () => {
  const context = useContext(movieContext);
  return (
    <Grid
      container
      spacing={2}
      style={{
        padding: '1rem',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      {context.loading ? (
        <Loader />
      ) : context.movies.length !== 0 ? (
        context.movies.map((search) => {
          return (
            <SearchItem
              key={search.id}
              id={search.id}
              img={search.backdrop_path}
              title={search.title}
              rating={search.vote_average}
            />
          );
        })
      ) : (
        <Box style={{ textAlign: 'center', width: '100%', overflow: 'hidden' }}>
          <Typography variant='h3' style={{ margin: '1rem 0' }}>
            Not Found
          </Typography>
        </Box>
      )}
    </Grid>
  );
};

export default Search;
