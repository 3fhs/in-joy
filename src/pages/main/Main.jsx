import React from 'react';
import "./main.css";
import Schedule from '../schedule/Schedule';
import Trend from '../trend/Trend';
import Blog from '../blogs/Blog';

function Main() {
  return (
    <main>
        <Schedule/>
        <Trend/>
        <Blog/>
    </main>
  )
}

export default Main;