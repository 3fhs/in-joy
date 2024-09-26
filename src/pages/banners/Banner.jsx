import React, { useEffect, useState } from 'react';
import "./banner.css";
import MovieContent from '../../componentes/moviecontent/MovieContent';
import MovieDate from '../../componentes/moviedate/MovieDate';
import MovieSwiper from '../../componentes/movieSwiper/MovieSwiper';

function Banner() {

  const [film, setFilm] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:4000/films")
    .then(res => res.json())
    .then(data => setFilm(data))
    .catch(error => console.log("Error fetching data:", error));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const changeBack = (id) => {
    const newFilm = film.map(change => {
      change.active = false;
      if (change.id === id) {
        change.active = true;
      }
      return change;
    });
    setFilm(newFilm);
  }

  return (
    <div className='banner'>
      {film && film.length > 0 && film.map(movie => (
        <div className="movie"  key={movie.id}>
          <img src={movie.poster} alt='background' className={`bgImg ${movie.active ? 'active' : undefined}`}/>
          <div className="container-fluid">
            <div className="row small-sc  d-flex align-items-center justify-content-center ">
                <div className="col-lg-6 col-md-12">
                  <MovieContent film={movie}/>
                </div>
                <div className="col-lg-6 col-md-12">
                  <MovieDate film={movie}/>
                </div>
            </div>
          </div>
        </div>
      ) 
      )}
      {film && film.length > 0 && <MovieSwiper slide={film} changeBack={changeBack}/>
      }
    </div>
  )
}

export default Banner