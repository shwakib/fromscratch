import React, { Component } from 'react';
import './App.css';
import { Transition } from 'react-transition-group'

class App extends Component {
  state = {
    show: true
  }
  render() {
    const animateTime = {
      enter: 1000, exit: 5000
    }
    return (
      <div className="App">
        <button onClick={() => this.setState({ show: !this.state.show })}>Toggle</button>
        <Transition in={this.state.show} timeout={animateTime} mountOnEnter unmountOnExit onEnter={() => console.log("OnEnter")} onEntering={() => console.log("OnEntering")} onEntered={() => console.log("OnEntered")} onExit={() => console.log("onExit")} onExiting={() => console.log("OnExiting")} onExited={() => console.log("OnExited")}>
          {
            mode => (<div style={{
              background: "black",
              color: "white",
              borderRadius: 4,
              transition: 'opacity 1s ease-out',
              opacity: mode === "exiting" || mode == "entering" ? 0 : 1
            }}>
              <p>I am some text!</p>
            </div>)
          }
        </Transition>
        <p>I am outside of the Transition!</p>
      </div >
    );
  }
}

export default App;
