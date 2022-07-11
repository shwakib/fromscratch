import React, { Component } from "react";
import { Button, Modal, ModalBody } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import Spinner from '../../Spinner/spinner';
import { resetIngredients } from '../../../redux/actionCreators';

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalprice: state.totalprice,
        purchasable: state.purchasable,
        userID: state.userID,
        token: state.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetIngredients: () => dispatch(resetIngredients())
    }
}

class Checkout extends Component {
    state = {
        values: {
            deliveryAddress: '',
            phone: '',
            paymentType: "Cash On Delivery"
        },
        isLoading: false,
        isModalOpen: false,
        modalMessage: ''
    }

    goback = () => {
        this.props.navigate(-1)
    }

    inputChangeHandler = event => {
        this.setState({
            values: {
                ...this.state.values,
                [event.target.name]: event.target.value,
            }
        })
    }

    submitHandler = () => {
        this.setState({
            isLoading: true
        })
        const order = {
            ingredients: this.props.ingredients,
            customerInfo: this.state.values,
            price: this.props.totalprice,
            orderTime: new Date().toUTCString(),
            userID: this.props.userID
        };
        axios.post("https://burger-builder-9e98c-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json?auth=" + this.props.token, order)
            .then(response => {
                if (response.status === 200) {
                    this.setState({
                        isLoading: false,
                        isModalOpen: true,
                        modalMessage: "Order Placed Successfully!"
                    });
                    this.props.resetIngredients();
                }
                else {
                    this.setState({
                        isLoading: false,
                        isModalOpen: true,
                        modalMessage: "Something Went Wrong! Order Again!"
                    })
                }
            })
            .catch(err => {
                this.setState({
                    isLoading: false,
                    isModalOpen: true,
                    modalMessage: "Something Went Wrong! Order Again!"
                })
            })
        // console.log(order);
    }

    render() {
        let form = (
            <div>
                <h4 style={{ border: "1px solid grey", boxShadow: "1px 1px #888888", borderRadius: "5px", padding: "20px" }}>Payment: {this.props.totalprice} /=</h4>
                <form style={{ border: "1px solid grey", boxShadow: "1px 1px #888888", borderRadius: "5px", padding: "20px" }}>
                    <textarea name="deliveryAddress" value={this.state.values.deliveryAddress} className='form-control' placeholder="Enter your address for delivery" onChange={(e) => this.inputChangeHandler(e)}></textarea>
                    <br />
                    <input name="phone" className="form-control" value={this.state.values.phone} placeholder="Your Phone Number" onChange={(e) => this.inputChangeHandler(e)} />
                    <br />
                    <select name="paymentType" className="form-control" value={this.state.values.paymentType} onChange={(e) => this.inputChangeHandler(e)}>
                        <option value='Cash On Delivery'> Cash On Delivery</option>
                        <option value='bKash'> bKash</option>
                    </select>
                    <br />
                    <Button color="success" className="mr-auto" onClick={this.submitHandler} disabled={!this.props.purchasable}>Place Order</Button>
                    <Button color="danger" className="mx-3" onClick={this.goback}>Cancel Order</Button>
                </form>
            </div>
        )
        return (
            <div>
                {this.state.isLoading ? <Spinner /> : form}
                <Modal isOpen={this.state.isModalOpen} onClick={this.goback}>
                    <ModalBody>
                        <p>{this.state.modalMessage}</p>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

// export default props => (
//     <Checkout navigate={useNavigate()} />
// );

const WithNavigate = (props) => {
    let navigate = useNavigate();
    return <Checkout {...props} navigate={navigate} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(WithNavigate);

//Using Formik
// import React, { Component } from "react";
// import { Button, Modal, ModalBody } from 'reactstrap';
// import { useNavigate } from 'react-router-dom';
// import { connect } from 'react-redux';
// import axios from 'axios';
// import Spinner from '../../Spinner/spinner';
// import { resetIngredients } from '../../../redux/actionCreators';
// import { Formik } from "formik";

// const mapStateToProps = state => {
//     return {
//         ingredients: state.ingredients,
//         totalprice: state.totalprice,
//         purchasable: state.purchasable
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         resetIngredients: () => dispatch(resetIngredients())
//     }
// }

// class Checkout extends Component {
//     state = {
//         isLoading: false,
//         isModalOpen: false,
//         modalMessage: ''
//     }

//     goback = () => {
//         this.props.navigate(-1)
//     }

//     submitHandler = (values) => {
//         this.setState({
//             isLoading: true
//         })
//         const order = {
//             ingredients: this.props.ingredients,
//             customerInfo: values,
//             price: this.props.totalprice,
//             orderTime: new Date()
//         };
//         axios.post("https://burger-builder-9e98c-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json", order)
//             .then(response => {
//                 if (response.status === 200) {
//                     this.setState({
//                         isLoading: false,
//                         isModalOpen: true,
//                         modalMessage: "Order Placed Successfully!"
//                     });
//                     this.props.resetIngredients();
//                 }
//                 else {
//                     this.setState({
//                         isLoading: false,
//                         isModalOpen: true,
//                         modalMessage: "Something Went Wrong! Order Again!"
//                     })
//                 }
//             })
//             .catch(err => {
//                 this.setState({
//                     isLoading: false,
//                     isModalOpen: true,
//                     modalMessage: "Something Went Wrong! Order Again!"
//                 })
//             })
//         console.log(order);
//     }

//     render() {
//         let form = (
//             <div>
//                 <h4 style={{
//                     border: "1px solid grey",
//                     boxShadow: "1px 1px #888888",
//                     borderRadius: "5px",
//                     padding: "20px",
//                 }}>Payment: {this.props.totalPrice} BDT</h4>
//                 <Formik initialValues={
//                     {
//                         deliveryAddress: '',
//                         phone: '',
//                         paymentType: "Cash On Delivery"
//                     }
//                 }
//                     validate={(values) => {
//                         const errors = {};
//                         return errors;
//                     }}
//                     onSubmit={(values) => {
//                         this.submitHandler(values);
//                     }}
//                 >
//                     {({ values, handleChange, handleSubmit, errors, touched, handleBlur }) => (
//                         <form style={{
//                             border: "1px solid grey",
//                             boxShadow: "1px 1px #888888",
//                             borderRadius: "5px",
//                             padding: "20px",
//                         }} onSubmit={handleSubmit}>
//                             <textarea name="deliveryAddress" value={values.deliveryAddress} className='form-control' onBlur={handleBlur} placeholder="Enter your address for delivery" onChange={handleChange}></textarea>
//                             <span>{errors.deliveryAddress && touched.deliveryAddress && errors.deliveryAddress}</span>
//                             <br />
//                             <input onBlur={handleBlur} name="phone" className="form-control" value={values.phone} placeholder="Your Phone Number" onChange={handleChange} />
//                             <br />
//                             <select onBlur={handleBlur} name="paymentType" className="form-control" value={values.paymentType} onChange={handleChange}>
//                                 <option value='Cash On Delivery'> Cash On Delivery</option>
//                                 <option value='bKash'> bKash</option>
//                             </select>
//                             <br />
//                             <Button type="submit" color="success" className="mr-auto" disabled={!this.props.purchasable}>Place Order</Button>
//                             <Button color="danger" className="mx-3" onClick={this.goback}>Cancel Order</Button>
//                         </form>
//                     )}
//                 </Formik>
//             </div>
//         )
//         return (
//             <div>
//                 {this.state.isLoading ? <Spinner /> : form}
//                 <Modal isOpen={this.state.isModalOpen} onClick={this.goback}>
//                     <ModalBody>
//                         <p>{this.state.modalMessage}</p>
//                     </ModalBody>
//                 </Modal>
//             </div>
//         )
//     }
// }

// // export default props => (
// //     <Checkout navigate={useNavigate()} />
// // );

// const WithNavigate = (props) => {
//     let navigate = useNavigate();
//     return <Checkout {...props} navigate={navigate} />;
// }

// export default connect(mapStateToProps, mapDispatchToProps)(WithNavigate);