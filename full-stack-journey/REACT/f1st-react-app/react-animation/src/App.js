import React, { Component } from 'react';
import './App.css';
import { Transition } from 'react-transition-group'

class App extends Component {
  state = {
    show: true
  }
  render() {
    return (
      <div className="App">
        <button onClick={() => this.setState({ show: !this.state.show })}>Toggle</button>
        <Transition in={this.state.show} timeout={2000}>
          {
            mode => (<div style={{
              background: "black",
              color: "white",
              borderRadius: 4,
              transition: 'opacity 1s ease-out',
              opacity: mode === "exited" ? 0 : 1
            }}>
              <p>I am some text!</p>
            </div>)
          }
        </Transition>
      </div >
    );
  }
}

export default App;
