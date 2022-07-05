import React, { Component } from 'react';
import Burger from './Burger/burger';
import Controls from './Controls/controls';
import Summary from './Summary/summary';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { addIngredients, removeIngredients, updatePurchasable } from '../../redux/actionCreators';

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalprice: state.totalprice,
        purchasable: state.purchasable
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addIngredients: (igtype) => dispatch(addIngredients(igtype)),
        removeIngredients: (igtype) => dispatch(removeIngredients(igtype)),
        updatePurchasable: () => dispatch(updatePurchasable())
    }
}

class BurgerBuilder extends Component {
    state = {
        modalOpen: false,
    }

    addIngredientHandle = type => {
        this.props.addIngredients(type);
        this.props.updatePurchasable();
    }
    removeIngredientHandle = type => {
        console.log('button clicked');
        this.props.removeIngredients(type);
        this.props.updatePurchasable();
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    handleCheckout = () => {
        // console.log(this.props);
        this.props.navigate('/checkout');
    }

    // componentDidMount() {
    //     console.log(this.props);
    // }

    render() {
        return (
            <div>
                <div className='d-flex flex-md-row flex-column'>
                    <Burger ingredients={this.props.ingredients} />
                    <Controls ingredientsAdded={this.addIngredientHandle} ingredientsRemoved={this.removeIngredientHandle} price={this.props.totalprice} toggleModal={this.toggleModal} purchasable={this.props.purchasable} />
                </div>
                <Modal isOpen={this.state.modalOpen}>
                    <ModalHeader>Your Order Summary</ModalHeader>
                    <ModalBody>
                        <Summary ingredients={this.props.ingredients} />
                        <h5>Total price: {this.props.totalprice} BDT</h5>
                    </ModalBody>
                    <ModalFooter>
                        <Button color='success' onClick={this.handleCheckout}>Continue to Checkout</Button>
                        <Button color='danger' onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

const WithNavigate = (props) => {
    let navigate = useNavigate();
    return <BurgerBuilder {...props} navigate={navigate} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(WithNavigate)