import React, { Component } from 'react';
import './App.css';
import Person from './components/Person.js'
import Book from './components/Book.js'

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
  state = {
    books: [
      { bookName: "Harry Potter", bookWriter: "George Orwell" },
      { bookName: "The Da Vinci Code", bookWriter: "Dan Brown" },
      { bookName: "The Alchemist", bookWriter: "Paulo Coelho" }
    ]
  }
  changeBookState = () => {
    this.setState({
      books: [
        { bookName: "Nineteen Eighty-Four", bookWriter: "George Orwell" },
        { bookName: "The Da Vinci Code", bookWriter: "Dan Brown" },
        { bookName: "Metmorphosis", bookWriter: "Franz Kafka" }
      ]
    });
  }
  // constructor() {
  //   super();
  //   this.state = {};
  // }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>Hello World</h1>
        {/* <Person name="Rahim" age="30">I am from Comilla </Person> */}
        <h1>Book List:</h1>
        <button onClick={this.changeBookState}>Change State</button>
        {/* <Book bookName="Harry Potter" bookWriter="George Orwell" />
        <Book bookName="The Da Vinci Code" bookWriter="Dan Brown" />
        <Book bookName="The Alchemist" bookWriter="Paulo Coelho" /> */}
        <Book bookName={this.state.books[0].bookName} bookWriter={this.state.books[0].bookWriter} />
        <Book bookName={this.state.books[1].bookName} bookWriter={this.state.books[1].bookWriter} />
        <Book bookName={this.state.books[2].bookName} bookWriter={this.state.books[2].bookWriter} />
      </div>
    );
  }
}

export default App;