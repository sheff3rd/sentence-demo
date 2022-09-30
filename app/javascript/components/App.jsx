import React, { Component } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

/* components */
import Home from './Home';
import Navigation from './Navigation';
import SentenceList from './SentenceList';
import Sentence from './Sentence';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="container">
            <Navigation />

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/sentences" element={<SentenceList />} />
              <Route exact path="/sentences/:id" element={<Sentence />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}


export default App;
