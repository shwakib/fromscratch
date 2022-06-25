import React, { Component } from 'react';
import Burger from './Burger/burger';
import Controls from './Controls/controls';
import Summary from './Summary/summary';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap'

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
        totalprice: 80,
        modalOpen: false,
        purchasable: false
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
        this.updatePurchasable(ingredients);
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
        this.updatePurchasable(ingredients);
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    updatePurchasable = ingredients => {
        const sum = ingredients.reduce((sum, element) => {
            return sum + element.amount;
        }, 0);
        this.setState({
            purchasable: sum > 0
        })
    }
    render() {
        return (
            <div>
                <div className='d-flex flex-md-row flex-column'>
                    <Burger ingredients={this.state.ingredients} />
                    <Controls ingredientsAdded={this.addIngredientHandle} ingredientsRemoved={this.removeIngredientHandle} price={this.state.totalprice} toggleModal={this.toggleModal} purchasable={this.state.purchasable} />
                </div>
                <Modal isOpen={this.state.modalOpen}>
                    <ModalHeader>Your Order Summary</ModalHeader>
                    <ModalBody>
                        <h5>Total price: {this.state.totalprice.toFixed(0)} BDT</h5>
                        <Summary ingredients={this.state.ingredients} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color='success' onClick={this.toggleModal}>Continue to Checkout</Button>
                        <Button color='danger' onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}