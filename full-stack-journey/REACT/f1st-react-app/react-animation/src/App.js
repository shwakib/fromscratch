import React, { Component } from 'react';
import './App.css';
import { Transition, CSSTransition } from 'react-transition-group'

class App extends Component {
  state = {
    show: true
  }
  render() {
    const animateTime = {
      enter: 1000, exit: 500
    }
    return (
      <div className="App">
        <button onClick={() => this.setState({ show: !this.state.show })}>Toggle</button>
        <CSSTransition in={this.state.show}
          timeout={animateTime}
          mountOnEnter unmountOnExit
          classNames="myClass">
          {
            mode => (<div style={{
              background: "black",
              color: "white",
              borderRadius: 4,
            }}>
              <p>I am some text!</p>
            </div>)
          }
        </CSSTransition>
        <p>I am outside of the Transition!</p>
      </div >
    );
  }
}

export default App;
