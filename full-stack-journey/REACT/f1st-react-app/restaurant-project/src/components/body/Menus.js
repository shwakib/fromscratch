import React, { Component } from "react";
import MenuItem from "./menuItem";
import Dishdetail from "./dishDetail";
import { CardColumns, Modal, ModalBody, ModalFooter, Button, Alert } from 'reactstrap'
import { connect } from 'react-redux';
import * as actionTypes from '../../redux/actionTypes';
import { addComment, fetchDishes, fetchComments } from '../../redux/actionCreators';
import Loading from './loading'

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addComment: (dishID, rating, author, comment) => dispatch(addComment(dishID, rating, author, comment)),
        fetchDishes: () => dispatch(fetchDishes()),
        fetchComments: () => dispatch(fetchComments())
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

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
    }

    render() {
        document.title = "Menu";

        if (this.props.dishes.isLoading) {
            return (
                <Loading />
            )
        }
        else if (this.props.dishes.errMess != null) {
            return (
                <Alert color="danger">{this.props.dishes.errMess}</Alert>
            )
        }
        else {
            const menu = this.props.dishes.dishes.map(item => {
                return (
                    <MenuItem dish={item} key={item.id} DishSelect={() => this.onDishSelect(item)} />
                )
            });

            let dishDetail = null;
            if (this.state.selectedDish != null) {
                const comments = this.props.comments.comments.filter(comment => {
                    return comment.dishId === this.state.selectedDish.id;
                })
                dishDetail = <Dishdetail dish={this.state.selectedDish} comments={comments} addComment={this.props.addComment} commentsIsLoading={this.props.comments.isLoading} />
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Menus);