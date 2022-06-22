import logo from './logo.svg';
import { React, Component } from 'react';
import './App.css';
import fetch from 'cross-fetch';
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    //Using fetch
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(data => console.log(data));

    //Using axios get
    // axios.get('http://localhost:3001/dishes')
    //   .then(response => response.data)
    //   .then(data => console.log(data))
    //   .catch(error => console.log(error.message));

    //Using axios post
    // axios.post('http://localhost:3001/dishes', { name: "Pizza", price: 295 })
    //   .then(reponse => console.log(reponse))

    //Using axios PUT
    // axios.put('http://localhost:3001/dishes/3', { name: "Steak", price: 800 })
    //   .then(reponse => console.log(reponse))

    //Using axios Delete
    // axios.delete('http://localhost:3001/dishes/9')
    //   .then(reponse => console.log(reponse))
  }
  render() {
    return (
      <div>

      </div>
    );
  }
}

export default App;