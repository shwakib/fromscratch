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

    addIngredientHandle = type => {
        const ingredients = [...this.state.ingredients];
        for (let item of ingredients) {
            if (item.type === type) item.amount++;
        }
        this.setState({
            ingredients: ingredients
        });
    }
    removeIngredientHandle = type => {
        const ingredients = [...this.state.ingredients];
        for (let item of ingredients) {
            if (item.type === type) {
                if (item.amount <= 0) return;
                item.amount--;
            }
        }
        this.setState({
            ingredients: ingredients
        });
    }
    render() {
        return (
            <div className='d-flex flex-md-row flex-column'>
                <Burger ingredients={this.state.ingredients} />
                <Controls ingredientsAdded={this.addIngredientHandle} ingredientsRemoved={this.removeIngredientHandle} />
            </div>
        )
    }
}