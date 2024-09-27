import React, { useState } from 'react';
import "./moviedate.css";
import ModalVideo from '../modal/ModalVideo';

function MovieDate({film}) {

  const [video, setVideo] = useState(false);

  const togglevideo = () => {
    setVideo(!video);
  }

  return (
    <div>
        <div className={`date ${film.active ? 'active' : undefined } `}>
          <h2> {film.releaseDate} </h2>
        </div>
        <div className={`trailer d-flex align-items-center justify-content-center ${film.active ? 'active' : undefined}`}>
          <button className='playBtn' onClick={togglevideo}>
            <ion-icon name="play-forward-outline"></ion-icon>
          </button>
          <p>Watch Trailer</p>
        </div>
        {film.active && <ModalVideo film={film} status={video} togglev={togglevideo}/>}
    </div>
  )
}

export default MovieDate