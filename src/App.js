import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Component/MainPage/Header/Header';
import Home from './Component/MainPage/Home/Home';

const App = () => {
  return (
        <div className="App">
            <Header />
            <Home />
        </div>
  );
}

export default App;