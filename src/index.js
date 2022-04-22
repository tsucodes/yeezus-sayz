import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));


const name = 'Kanye Omari West';
const hometown = 'Ye has always repped the Chi but he was born in Atlanta, GA.';
const career = 'Since taking the music industry by storm with his 2004 debut album,"The College Dropout", Yeezus has become one of the most infulential producers and artist in hip hop history.';
const accomplishments = 'In additon to being a grammy award winning artist, Ye is also a fashion desginer that has collaborated with high end fashion labels and owner of Yeezy. Now Backed by adidas Yezzy`s sneaker bussiness alone is worth over $1.4 million dollars';
const networth = 'According to forbes his networth is estimated to be a whopping $2 billion dollars';
const facts = [
  {'fact': 'Changed his legal name to Ye in 2021'},
  {'fact': 'Recorded a song with his jaw wired shut'},
  {'fact': 'Was sued by Evel Knievel'},
  {'fact': 'Was arrested in 2000 for stealing printers from OfficeMax'},
  {'fact': 'Moved to china for a year at the age of ten'},
  {'fact': 'Worked to get the Donda West Law passed which requires a patient to receive a physical exam and written clearance from a doctor within 30 days before elective cosmetic surgery'},
]
root.render(
  <React.StrictMode>
    <Router><App name={name} hometown ={hometown}
        career={career}
        accomplishments= {accomplishments}
        networth={networth}
        facts={facts} /></Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
