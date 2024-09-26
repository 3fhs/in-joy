import React, { useEffect, useState } from 'react';
import "./schedule.css";
import Cart from '../../componentes/cartmovies/Cart';

function Schedule() {
  const filterList = [
    {
      id: 1,
      name: 'All',
      active: true,
    },
    {
      id: 2,
      name: 'Romance',
      active: false,
    },
    {
      id: 3,
      name: 'Action',
      active: false,
    },
    {
      id: 4,
      name: 'Thriller',
      active: false,
    },
    {
      id: 5,
      name: 'Science Fiction',
      active: false,
    },
    {
      id: 6,
      name: 'Adventure',
      active: false,
    },
    {
      id: 7,
      name: 'Comedy',
      active: false,
    },
    {
      id: 8,
      name: 'Family',
      active: false,
    },
    {
      id: 9,
      name: 'Drama',
      active: false,
    },
  ]

  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState(filterList);

  const fetchData = () => {
    fetch("http://localhost:4000/films")
    .then(res => res.json())
    .then(data => setData(data))
    .catch(error => console.log("Error fetching data:", error));
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setMovies(data);
  }, [data])

  const filterByGenre = genre => {
    if (genre === 'All') {
      setMovies(data); // Show all movies if the genre is 'All'
    } else {
      const genreMovie = data.filter(film => film.genre === genre);
      setMovies(genreMovie);
    }

  // Update filters' active state
  const updatedFilters = filters.map(filter =>
    filter.name === genre ? { ...filter, active: true } : { ...filter, active: false }
  );
  setFilters(updatedFilters);

  }

  return (
    <section className="schedule" id='schedule'>
        <div className="container-fluid">
            <div className="row">
                <h4 className="section-title">Opening this week</h4>
            </div>
            <div className="row">
              <ul className='filters'>
                {filters.map(filter => (
                  <li key={filter.id} className={`${filter.active ? 'active' : ''}`}
                    onClick={() => filterByGenre(filter.name)}
                  > 
                    {filter.name} 
                  </li>
                )
              )}
              </ul>
            </div>
            <div className="row mt-5">
              {movies && movies.length > 0 && 
                movies.map(movie => 
                  <Cart movie={movie} key={movie.id} />
                )}
            </div>
        </div>
    </section>
  )
}

export default Schedule;