import React, { Component } from 'react';
import Burger from './Burger/burger';

export default class burgerBuilder extends Component {
    state = {
        ingredients: [
            { type: 'salad', amount: 0 },
            { type: 'cheese', amount: 0 },
            { type: 'meat', amount: 0 }
        ]
    }
    render() {
        return (
            <div>
                <Burger ingredients={this.state.ingredients} />
            </div>
        )
    }
}