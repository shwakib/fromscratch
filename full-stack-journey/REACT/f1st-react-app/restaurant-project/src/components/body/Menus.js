import React, { Component } from "react";
import DISHES from "../../data/dishes";
import MenuItem from "./menuItem";
import Dishdetail from "./dishDetail";
import COMMENTS from "../../data/comments";
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap'
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addComment: (dishID, rating, author, comment) => dispatch({
            type: 'ADD_COMMENT',
            payload: {
                dishId: dishID,
                author: author,
                rating: rating,
                comment: comment
            }
        })
    }
}

class Menus extends Component {
    state = {
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
        document.title = "Menu";
        const menu = this.props.dishes.map(item => {
            return (
                <MenuItem dish={item} key={item.id} DishSelect={() => this.onDishSelect(item)} />
            )
        });

        let dishDetail = null;
        if (this.state.selectedDish != null) {
            const comments = this.props.comments.filter(comment => {
                return comment.dishId === this.state.selectedDish.id;
            })
            dishDetail = <Dishdetail dish={this.state.selectedDish} comments={comments} addComment={this.props.addComment} />
        }

        return (
            < div className="container" >
                <div className="row">
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.isModalOpen}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Menus);