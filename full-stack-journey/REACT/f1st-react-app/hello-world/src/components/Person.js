import React, { Component } from "react";

// function Person() {
//     return (
//         <div>
//             <h1>I am person component</h1>
//         </div>
//     );
//     // return React.createElement('div', null, React.createElement('h1', null, 'I Am person Component'));
// }

//Arrow Function
// let Person = (props) => {
//     return (
//         <div>
//             <h1>Number:{Math.random()}</h1>
//             <h1>Name: {props.name} and Age: {props.age} Years and {props.children}</h1>
//         </div>
//     );
// }

//Class Component
class Person extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Number:{Math.random()}</h1>
                <h1>Name: {this.props.name} and Age: {this.props.age} Years and {this.props.children}</h1>
            </div>
        );
    }
}

export default Person;