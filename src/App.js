
import './App.css';
import Page2 from './Page2';
import vid from './videos/Waves.mp4'
import React from 'react'
import ReactDOM from 'react-dom'
import { useNavigate  } from 'react-router-dom';


function App() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/Page2`; 
    navigate(path);
  }
  return (
    <>
      <div className='flex1'>
        <button className='bouton' onClick={routeChange}>C'est parti !</button>
      </div>
      <video className='seavid' src={vid} loop autoPlay muted controls />
    </>
  );
}



export default App;
