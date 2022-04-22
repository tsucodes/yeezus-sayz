import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));


const name = 'kanye';
const hometown = 'Ye was born in Atlanta, GA and raised in Chicago, IL';
// const career = 'Since taking the music industry by storm with his 2004 debut album,"The College Dropout", Yeezus has become one of the most infulential producer and arist in hip hop history.';
// const accomplishments = 'In additon to being a grammy award winning artist, Ye is also a fashion desginer that has collaborated with high end fashion labels and owner of Yeezy. Now Backed by adidas Yezzy`s sneaker bussiness alone is worth over $1.4 million dollars';
// const networth = 'According to forbes his networth is estimated to be a whopping $2 billion dollars';
const fact = [
  {'fact':'fact'}
]
root.render(
  <React.StrictMode>
    <Router><App name={name} hometown ={hometown}
        career={'Since taking the music industry by storm with his 2004 debut album,"The College Dropout", Yeezus has become one of the most infulential producer and arist in hip hop history.'}
        accomplishments= {'In additon to being a grammy award winning artist, Ye is also a fashion desginer that has collaborated with high end fashion labels and owner of Yeezy. Now Backed by adidas Yezzy`s sneaker bussiness alone is worth over $1.4 million dollars'}
        networth={'According to forbes his networth is estimated to be a whopping $2 billion dollars'}
        fact={fact} /></Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
