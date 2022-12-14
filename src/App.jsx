import { useState } from 'react'
import React from 'react'
import{BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home'
import PageNotFound from './components/NotFound/NotFound';
import MovieDetail from "./components/MovieDetail/MovieDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className="container">
         <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/movie/:imdbID" component={MovieDetail}/>
          <Route component={PageNotFound}/>
         </Switch>
          </div>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
