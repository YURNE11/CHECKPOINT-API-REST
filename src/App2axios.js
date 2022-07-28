import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, { useState, useEffect } from "react";

function App() {
      const [info, setInfo] = useState([]);
      const [error, setError] = useState([]);
      useEffect(() => {
        axios.get ("https://jsonplaceholder.typicode.com/posts")
          .then(response => setInfo(response.data))
          .catch(error => {console.log(error)})
      }, []);
    console.log(info);
  return (
    <div className="App">
      {info.map(item => (
      <div key={item.id}>
      <h3>{item.title}</h3>
      <p>{item.body}</p>
      </div>
      ))}
    </div>
  );
}
export default App;