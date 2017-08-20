import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CourseSales from './CourseSales';

class App extends Component {
  render() {
    let courses = [
      {name: "course 1", price: 122},
      {name: "course 2", price: 240},
      {name: "course 3", price: 159},
      {name: "course 4", price: 199},
    ];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Course list</h2>
        </div>
        <CourseSales items={courses} />
      </div>
    );
  }
}

export default App;
