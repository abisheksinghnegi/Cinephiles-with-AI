import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Movie.css";
import { NavLink } from 'react-router-dom';

const Movie = () => {
  const [popmovies, setPopMovies] = useState([]);
  const [trendmovies, setTrendmovies] = useState([]);
  const [horrormovies, setHorrormovies] = useState([]);
  const [pysmovies, setPsymovies] = useState([]);
  const [comedymovies, setComedymovies] = useState([]);
  const [topmovies, setTopmovies] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const apiKey = '94b1f21d4d882617dcdfbdb099ffd67c';
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const [popRes, trendRes, topRes, horrorRes, psyRes, comedyRes] = await Promise.all([
          axios.get(`https://api.themoviedb.org/3/discover/movie`, { params: { api_key: apiKey, page: 2 } }),
          axios.get(`https://api.themoviedb.org/3/trending/movie/week`, { params: { api_key: apiKey } }),
          axios.get(`https://api.themoviedb.org/3/movie/top_rated`, { params: { api_key: apiKey } }),
          axios.get(`https://api.themoviedb.org/3/discover/movie`, { params: { api_key: apiKey, with_genres: 27 } }),
          axios.get(`https://api.themoviedb.org/3/discover/movie`, { params: { api_key: apiKey, with_genres: 53, page: 5 } }),
          axios.get(`https://api.themoviedb.org/3/discover/movie`, { params: { api_key: apiKey, with_genres: 35 } })
        ]);

        setPopMovies(popRes.data.results);
        setTrendmovies(trendRes.data.results);
        setTopmovies(topRes.data.results);
        setHorrormovies(horrorRes.data.results);
        setPsymovies(psyRes.data.results);
        setComedymovies(comedyRes.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);

    if (e.target.value.trim() === "") {
      setIsSearching(false);
      setSearchResults([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    setIsSearching(true);

    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
        params: { api_key: apiKey, query: search },
      });

      setSearchResults(response.data.results);
    } catch (error) {
      console.error("Error searching for movies:", error);
    }
  };

  return (
    <div id='mainbg'>
      <form id='form' onSubmit={handleSubmit}>
        <input id='searchcont' 
               type="text" 
               placeholder='Search a movie...'
               value={search}
               onChange={handleSearchChange} />
        <button type="submit" id='searchbtn'>Search</button>
      </form>

      {isSearching ? (
        <div className='genre'>
          <h1 className='genrecon'>Search Results</h1>
          <div className='scroll-container'>
            {searchResults.length > 0 ? (
              searchResults.map((movie) => (
                <div key={movie.id}>
                  <NavLink to={`/movie/${movie.id}`}>
                    <img className='poster' src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
                  </NavLink>
                  <h3 className='title'>{movie.title}</h3>
                </div>
              ))
            ) : (
              <p>No movies found.</p>
            )}
          </div>
        </div>
      ) : (
        <>
          <MovieCategory title="Popular Movies" movies={popmovies} IMAGE_BASE_URL={IMAGE_BASE_URL} />
          <MovieCategory title="Top Rated Movies" movies={topmovies} IMAGE_BASE_URL={IMAGE_BASE_URL} />
          <MovieCategory title="Trending Movies" movies={trendmovies} IMAGE_BASE_URL={IMAGE_BASE_URL} />
          <MovieCategory title="Horror Movies" movies={horrormovies} IMAGE_BASE_URL={IMAGE_BASE_URL} />
          <MovieCategory title="Comedy Movies" movies={comedymovies} IMAGE_BASE_URL={IMAGE_BASE_URL} />
          <MovieCategory title="Psychological Thriller" movies={pysmovies} IMAGE_BASE_URL={IMAGE_BASE_URL} />
        </>
      )}
    </div>
  );
};

const MovieCategory = ({ title, movies, IMAGE_BASE_URL }) => (
  <div className='genre'>
    <h1 className='genrecon'>{title}</h1>
    <div className='scroll-container'>
      {movies.map((movie) => (
        <div key={movie.id}>
          <NavLink to={`/movie/${movie.id}`}>
            <img className='poster' src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
          </NavLink>
          <h3 className='title'>{movie.title}</h3>
        </div>
      ))}
    </div>
  </div>
);

export default Movie;
