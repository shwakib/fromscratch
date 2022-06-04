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
    const style = { //In React, css codes needs to be written as JS code.
      border: "1px solid red",
      borderRadius: '5px', //border-radius, - will not be used.
      backgroundColor: 'black',
      color: 'white'
    };
    return (
      <div className="App"> {/*root element should be only one and App.css has been added*/}
        <h1>Hello World</h1>
        {/* <Person name="Rahim" age="30">I am from Comilla </Person> */}
        <h1 style={style}>Book List:</h1> {/*Adding css in one single component*/}
        {/* <Book bookName="Harry Potter" bookWriter="George Orwell" />
        <Book bookName="The Da Vinci Code" bookWriter="Dan Brown" />
        <Book bookName="The Alchemist" bookWriter="Paulo Coelho" /> */}
        <Book bookName={this.state.books[0].bookName} bookWriter={this.state.books[0].bookWriter} inputName={this.changeWithInput} /> {/*Sending properties to book function [bookName,bookWriter] & inputName is a variable ={this.changeWithInput} sending an event in parameter*/}
        <Book bookName={this.state.books[1].bookName} bookWriter={this.state.books[1].bookWriter} />
        <Book bookName={this.state.books[2].bookName} bookWriter={this.state.books[2].bookWriter} change={this.changeBookState.bind(this, "Amar Bondhu Rashed")} /> {/*Sending properties to book function [bookName,bookWriter] & change= is a variable {this.changeBookState.bind(this, "Amar Bondhu Rashed")} sending event and value as parameters*/}

        <button onClick={() => this.changeBookState("Amar Bondhu CTO")}>Change State</button> {/*onClick={() => this.changeBookState("Amar Bondhu CTO") sending bookName as parameters to an event fuction using an arrow function*/}
        <input type="text" onChange={this.changeWithInput}></input>
      </div>
    );
  }
}

export default App;