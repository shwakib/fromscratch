import React, { Component } from "react";
import DISHES from "../../data/dishes";
import MenuItem from "./menuItem";
import Dishdetail from "./dishDetail";
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap'

class Menus extends Component {
    state = {
        dishes: DISHES,
        selectedDish: null,
        isModalOpen: false
    }
    onDishSelect = (dish) => {
        this.setState({ selectedDish: dish, isModalOpen: !this.state.isModalOpen });
    }
    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    render() {
        const menu = this.state.dishes.map(item => {
            return (
                <MenuItem dish={item} key={item.id} DishSelect={() => this.onDishSelect(item)} />
            )
        });

        let dishDetail = null;
        if (this.state.selectedDish != null) {
            dishDetail = <Dishdetail dish={this.state.selectedDish} />
        }

        return (
            < div className="container" >
                <div className="row">
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.isModalOpen} onClick={this.toggleModal}>
                        <ModalBody>
                            {dishDetail}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" onClick={this.toggleModal}>
                                Close
                            </Button>
                        </ModalFooter>
                    </Modal>
                    {/* <div className="col-6">
                        {menu}
                    </div> */}
                    {/* <div className="col-6">
                        {dishDetail}
                    </div> */}
                </div>
            </div >
        )
    };
}

export default Menus;