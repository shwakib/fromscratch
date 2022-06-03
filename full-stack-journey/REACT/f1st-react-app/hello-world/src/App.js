import React, { Component } from 'react';
import './App.css';
import Person from './components/Person.js'

//Functional Component
// function App() {
//   return ( //-JSX
//     <div className="App">
//       <h1>Hello World</h1>
//       <Person />
//     </div>
//   );
//   // return React.createElement('div', { className: "App" }, React.createElement('h1', null, 'Hello World'), <Person />);
// }

//Class Component
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Person name="Rahim" age="30">I am from Comilla </Person>
      </div>
    );
  }
}

export default App;