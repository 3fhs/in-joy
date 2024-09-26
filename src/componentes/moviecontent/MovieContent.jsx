import React from 'react';
import "./movieContent.css";
import ButtonInBunner from '../buttonInBanner/ButtonInBunner';

function MovieContent({film}) {
  return (
    <div className={`content ${film.active ? 'active' : undefined }`}>
                  <h4>
                    <span>{film.year}</span>
                    <span>
                      <i>{film.ageRating}</i>
                    </span>
                    <span>{film.duration}</span>
                    <span>{film.title}</span>
                  </h4>
                  <p>
                    {film.description}
                  </p>
                  <div className="button">
                    <ButtonInBunner icon={<ion-icon name="bookmark"></ion-icon>} name="Book"
                        color="#ffffff" bgColor="#ff3700" film={film}
                    />
                    <ButtonInBunner icon={<ion-icon name="add"></ion-icon>} name="MY List"
                        color="#ff3700" bgColor="#ffffff" film={film}
                    />
                  </div>
    </div>
  )
}

export default MovieContent