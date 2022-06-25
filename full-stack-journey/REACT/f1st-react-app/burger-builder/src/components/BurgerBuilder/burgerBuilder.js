import React, { Component } from 'react';
import Burger from './Burger/burger';
import Controls from './Controls/controls';

const ingredientsPrices = {
    salad: 20,
    cheese: 40,
    meat: 90
}

export default class burgerBuilder extends Component {
    state = {
        ingredients: [
            { type: 'salad', amount: 0 },
            { type: 'cheese', amount: 0 },
            { type: 'meat', amount: 0 }
        ],
        totalprice: 80
    }

    addIngredientHandle = type => {
        const ingredients = [...this.state.ingredients];
        const newPrice = this.state.totalprice + ingredientsPrices[type];
        for (let item of ingredients) {
            if (item.type === type) item.amount++;
        }
        this.setState({
            ingredients: ingredients,
            totalprice: newPrice
        });
    }
    removeIngredientHandle = type => {
        const ingredients = [...this.state.ingredients];
        const newPrice = this.state.totalprice - ingredientsPrices[type];
        for (let item of ingredients) {
            if (item.type === type) {
                if (item.amount <= 0) return;
                item.amount--;
            }
        }
        this.setState({
            ingredients: ingredients,
            totalprice: newPrice
        });
    }
    render() {
        return (
            <div className='d-flex flex-md-row flex-column'>
                <Burger ingredients={this.state.ingredients} />
                <Controls ingredientsAdded={this.addIngredientHandle} ingredientsRemoved={this.removeIngredientHandle} price={this.state.totalprice} />
            </div>
        )
    }
}