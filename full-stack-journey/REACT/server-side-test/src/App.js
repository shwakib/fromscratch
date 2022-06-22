import logo from './logo.svg';
import { React, Component } from 'react';
import './App.css';
import fetch from 'cross-fetch';
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(data => console.log(data));

    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.data)
      .then(data => console.log(data[0].body))
  }
  render() {
    return (
      <div>

      </div>
    );
  }
}

export default App;