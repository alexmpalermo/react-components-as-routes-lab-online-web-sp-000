import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => (
      <div key={movie.title}>
        {movie.title} - {movie.time} minutes
        <ul>
        {movie.genres.map(genre => (
          <li key={genre}>{genre}</li>
        ))}
        </ul>
      </div>
      ))}
    </div>
  );
};

export default Movies;
