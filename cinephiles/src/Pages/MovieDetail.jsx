import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./MovieDetail.css"

function MovieDetail() {
  const apiKey = '94b1f21d4d882617dcdfbdb099ffd67c';
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
  const { movieid } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // Fetch movie details
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieid}?api_key=${apiKey}`);
        const data = await response.json();
        setMovie(data);

        // Fetch trailer details
        const trailerResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieid}/videos?api_key=${apiKey}`);
        const trailerData = await trailerResponse.json();

        
        // Filter for the YouTube trailer
        const officialTrailer = trailerData.results.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );
        if (officialTrailer) {
          setTrailerUrl(`https://www.youtube.com/watch?v=${officialTrailer.key}`);
        }
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
    
    fetchMovieDetails();
  }, [movieid]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div id="movie-detail-container"
      style={{
        backgroundImage: `url(${IMAGE_URL}${movie.backdrop_path})`
      }}>
      <div id="movie-detail-container2">
        <div>
          <div id='maindiv'>
            <img
              className="posterbanner"
              src={`${IMAGE_URL}${movie.poster_path}`}
              alt={movie.title}
            />
            <div id='infomovie'>
              <h1 id='moviename'>{movie.title}</h1>
              <h3 className='info'>Release Date: {movie.release_date}</h3>
              <br />
              <p className='info'>Movie Info: {movie.overview}</p>
            </div>
            <div id='btns'>
                <a href={trailerUrl} target="_blank" rel="noopener noreferrer">
                  <button className='red'>Watch Trailer</button>
                </a>
                <a href={`https://www.1377x.to/search/${encodeURIComponent(movie.title)}/1/`}
                   target="_blank"
                   rel="noopener noreferrer">
                  <button className='green'>Torrent Download</button>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
