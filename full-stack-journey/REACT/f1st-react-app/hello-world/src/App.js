import React from 'react';
import './App.css';
import Person from './components/Person.js';
import MainComponent from './components/mainComponent.js';

//Functional Component
const App = () => {
  return ( //-JSX
    <MainComponent />
  );
  // return React.createElement('div', { className: "App" }, React.createElement('h1', null, 'Hello World'), <Person />);
}

//Class Component
// class App extends Component {

// }

export default App;