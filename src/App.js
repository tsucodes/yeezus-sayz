import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AboutYe from './components/AboutYe';

function App(props) {
  return (
    <div className="App">
      <nav className='nav'>
      <Link className='home-link' to="/">Home</Link>
      <Link className='about-link' to="/aboutye">About Ye</Link>
      </nav>
     <main>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/aboutye" element={<AboutYe name={props.name} hometown={props.hometown} career={props.career} accomplishments={props.accomplishments} networth={props.networth}/>}/>
       </Routes>
     </main>
    </div>
  );
}

export default App;
