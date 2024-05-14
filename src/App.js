import React from 'react-dom';
import { useEffect, useState } from 'react';
import './App.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend } from 'recharts';

function Interval() {
  const [intervalName, setIntervalName] = useState(null);
  const intervalList = ['1 hour', '24 hours', '7 days', '30 days'];
  return(
    <div className="dropdown">
    <a className="btn btn-secondary dropdown-toggle" 
      href="#" role="button" data-bs-toggle="dropdown" 
      aria-expanded="false">
      {intervalName ? intervalName : "Choose interval"}
    </a>
    <ul className="dropdown-menu">
      {intervalList.map((el, index) => {
        return <li key={index}><a className="dropdown-item" href="#"
          onClick={(event) => {
            event.preventDefault();
            setIntervalName(el);
          }}>{el}</a></li>
      })}
    </ul>
  </div>
  )
}

function CurrencyList() {
  const [list, setList] = useState([]);
  const [currency, setCurrency] = useState(null);

  function getCurrency() {
    // fetch('https://api.coincap.io/v2/assets')   https://api.coinbase.com/v2/exchange-rates?currency=BTC 
    fetch('https://api.coincap.io/v2/assets')
      .then((response) => response.json())
        .then((data) => {
          // console.log(data.data[1].id);
          setList(data.data);
        }).catch((err) => {
          console.log('not loading...', err);
        })
  }

  return(
    <div className="dropdown">
      <a className="btn btn-secondary dropdown-toggle" 
        href="#" role="button" data-bs-toggle="dropdown" 
        aria-expanded="false" 
        onClick={getCurrency}>
        {currency ? currency : "Choose cryptocurrency"}
      </a>
      <ul className="dropdown-menu">
        {list.map((el, index) => {
          return <li key={index}><a className="dropdown-item" href='#'
            onClick={(event) => {
              event.preventDefault();
              setCurrency(el.id);
            }}>{el.id}</a></li>
        })}
        {/* <li><a className="dropdown-item" href="#">Bitcoin 1</a></li>
        <li><a className="dropdown-item" href="#">Bitcoin 2</a></li>
        <li><a className="dropdown-item" href="#">Bitcoin 3</a></li>
        <li><a className="dropdown-item" href="#">Bitcoin 4</a></li> */}
      </ul>
      {/* <button onClick={getCurrency} className={"btn btn-primary"}>Get info</button> */}
    </div>
  )
}

function CreateChart() {
  const data = [
    {name: "A", value: 1000},
    {name: "B", value: 150},
    {name: "C", value: 10},
    {name: "D", value: 50}
  ];

  return (
    <BarChart width={500} height={300} data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }} barSize={20}>
      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
    </BarChart>
  )
}

function App() {
  return (
    <div className="app">
      <h1 style={{padding:'3rem'}}>Cryptocurrency list</h1>
      <div className='lists'>
        <CurrencyList />
        <Interval />
        <CreateChart />
      </div>
    </div>
  );
}

export default App;
