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
  changeBookState = (newBookName) => {
    this.setState({
      books: [
        { bookName: "Nineteen Eighty-Four", bookWriter: "George Orwell" },
        { bookName: newBookName, bookWriter: "Dan Brown" },
        { bookName: "Metmorphosis", bookWriter: "Franz Kafka" }
      ]
    });
  }
  changeWithInput = (event) => {
    this.setState({
      books: [
        { bookName: event.target.value, bookWriter: "George Orwell" },
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
    const style = {
      border: "1px solid red",
      borderRadius: '5px',
      backgroundColor: 'black',
      color: 'white'
    };
    return (
      <div className="App">
        <h1>Hello World</h1>
        {/* <Person name="Rahim" age="30">I am from Comilla </Person> */}
        <h1 style={style}>Book List:</h1>
        {/* <Book bookName="Harry Potter" bookWriter="George Orwell" />
        <Book bookName="The Da Vinci Code" bookWriter="Dan Brown" />
        <Book bookName="The Alchemist" bookWriter="Paulo Coelho" /> */}
        <Book bookName={this.state.books[0].bookName} bookWriter={this.state.books[0].bookWriter} inputName={this.changeWithInput} />
        <Book bookName={this.state.books[1].bookName} bookWriter={this.state.books[1].bookWriter} />
        <Book bookName={this.state.books[2].bookName} bookWriter={this.state.books[2].bookWriter} change={this.changeBookState.bind(this, "Amar Bondhu Rashed")} />

        <button onClick={() => this.changeBookState("Amar Bondhu CTO")}>Change State</button>
        <input type="text" onChange={this.changeWithInput}></input>
      </div>
    );
  }
}

export default App;