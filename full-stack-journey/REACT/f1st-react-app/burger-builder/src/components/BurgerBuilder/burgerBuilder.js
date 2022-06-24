import React, { Component } from 'react';
import Burger from './Burger/burger';
import Controls from './Controls/controls';

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
            <div className='d-flex flex-md-row flex-column'>
                <Burger ingredients={this.state.ingredients} />
                <Controls />
            </div>
        )
    }
}