import React, { Component } from "react";
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom'

class Checkout extends Component {
    state = {
        values: {
            deliveryAddress: '',
            phone: '',
            paymentType: "Cash On Delivery"
        }
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
        console.log(this.state.values);
    }

    render() {
        return (
            <div>
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
                    <Button color="success" className="mr-auto" onClick={this.submitHandler}>Place Order</Button>
                    <Button color="danger" className="mx-3" onClick={this.goback}>Cancel Order</Button>
                </form>
            </div>
        )
    }
}

export default props => (
    <Checkout navigate={useNavigate()} />
);