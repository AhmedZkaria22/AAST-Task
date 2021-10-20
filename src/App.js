import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.min.js';
import './styles/App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AppCarousel from './components/AppCarousel';
import Campuses from './components/Campuses';
import Services from './components/Services';
import LatestNews from './components/LatestNews';
import Events from './components/Events';
import Deanery from './components/Deanery';
import Footer from './components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import Chat from './components/Chat';
import popimg from './images/testing-center.jpg';
import { useState } from 'react';

function App() {
  const [wd, setWd] = useState(document.body.clientWidth);
  window.addEventListener('resize', ()=>{ setWd(document.body.clientWidth); });

  const handelDelay1 = () => {        
      const links = document.querySelectorAll('#Campuses p a');
      links[0].style.opacity = '1';
      links[0].style.animationName = 'campusesAnmy1' ;
      for(let i = 1; i<links.length; i++){
          setTimeout(() => {
              links[i].style.opacity = '1';
              links[i].style.animationName = `campusesAnmy${i+1}` ;                    
          }, 400);
      } 
  }
  const handelDelay2 = () => {    
      const smLinks = document.querySelectorAll('#Campuses div a');
      for(let i = 1; i<smLinks.length; i++){
          setTimeout(() => {
              smLinks[i].style.opacity = '1';
              smLinks[i].style.animationName = `campusesGridAnmy` ;
          }, 200);
      }    
  }

  document.addEventListener('scroll', () => {
      const ht1 = document.getElementsByTagName('header')[0].offsetHeight ,
          ht2 = document.querySelector('.scr-no-small').offsetHeight ,
          ht3 = document.querySelector('.AppCarousel').offsetHeight;

      let totalOffset = 0;
      if( wd >= 786 ){ totalOffset = 20 + ht1 + ht2 + ht3;
      }else{ totalOffset = 20 + ht1 + ht3; }
      
      if( window.scrollY >= totalOffset ){
          if( wd >= 786 ){ handelDelay1();
          }else{ handelDelay2(); }
      }
  });
  
  return (
    <div className="App">
      <Header wd={wd}/>
      <Navbar wd={wd} scrnCls='scr-no-small'/>
      <AppCarousel />
      <Campuses wd={wd}/>
      <Services />
      <LatestNews />
      <Events />
      <Deanery />
      <Footer />
      <section id='popup'>
        <img src={popimg} alt='img' />
        <button onClick={(e) => {
          e.target.parentElement.style.display = 'none';
        }}>Close</button>
      </section>
      <Chat />
      <div className='small-nav'> <Navbar wd={wd} scrnCls='scr-small'/> </div>
      <button className='btnTop' onClick={() => { window.scrollTo(0,0); }}> <FontAwesomeIcon  icon={faAngleUp} /> </button>
    </div>
  );
}

export default App;
