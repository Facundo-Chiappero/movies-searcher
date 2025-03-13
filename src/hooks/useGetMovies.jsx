import { useState, useEffect } from 'react';
import { apiCall } from '../services/apiCall';

const useGetMovies = ({ query, url }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getData = async () => {
      const { newError, newMovies } = await apiCall({ query, url });
      setError(newError);
      setMovies(newMovies || movies);
    };

    getData();
  }, [query]);

  return { movies, error };
};

export default useGetMovies;
