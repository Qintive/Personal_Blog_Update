import React from 'react'
import './App.css';
import { compose } from 'redux';
import { connect } from 'react-redux';
import OnStartNow from './Components/OnStartNow/OnStartNow';
import { Route } from 'react-router-dom';
import Home from './Components/Home/Home';


function App(props) {

  return (
    <>
      <Route path exact ='/' render={() => <Home />} />
      <Route path ='/startNow' render={() => <OnStartNow />} />
    </>
  );
}

export default compose(
  connect()
)(App);

