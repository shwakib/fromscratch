import React from 'react';
import './App.css';

function App() {
  return ( //-JSX
    <div className="App">
      <h1>Hello World</h1>
      <Person />
    </div>
  );
  // return React.createElement('div', { className: "App" }, React.createElement('h1', null, 'Hello World'), <Person />);
}

function Person() {
  return (
    <div>
      <h1>I am person component</h1>
    </div>
  );
  // return React.createElement('div', null, React.createElement('h1', null, 'I Am person Component'));
}

export default App;