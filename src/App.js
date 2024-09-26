import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banner from './pages/banners/Banner';
import Header from './pages/header/Header';
// import Swiper and modules styles
import 'swiper/css';
import Main from './pages/main/Main';
import BtnUp from './componentes/btnup/BtnUp';
import Footer from './pages/footer/Footer';
import { useEffect, useState } from 'react';

function App() {

  //the scroll postion of window
  const [scroll, setScroll] = useState(0);
  
  //
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    })
    return () => {
      window.removeEventListener('scroll', () => {
        setScroll(window.scrollY)
      })
    }
  }, [scroll])

  return (
    <div className="App">
      <Header scroll={scroll}/>
      <Banner/>
      <Main/>
      <Footer/>
      <BtnUp scroll={scroll}/>
    </div>
  );
}

export default App;
