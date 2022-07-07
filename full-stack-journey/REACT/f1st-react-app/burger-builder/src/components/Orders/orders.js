import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from '../../redux/actionCreators';
import Order from './Order/order';
import Spinner from '../Spinner/spinner';

const mapStateToProps = state => {
    return {
        orders: state.orders,
        orderLoading: state.orderLoading,
        orderError: state.orderError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: () => dispatch(fetchOrders()),
    }
}

class orders extends Component {
    componentDidMount() {
        this.props.fetchOrders();
    }
    componentDidUpdate() {
        console.log(this.props);
    }
    render() {
        let orders = null;
        if (this.props.orderError) {
            orders = <p style={{
                border: '1px solid grey',
                boxShadow: '1px 1px #888888',
                borderRadius: '5px',
                padding: '20px',
                marginBottom: '10px'
            }}>Sorry Failed to Load orders list</p>
        }
        else {
            if (this.props.orders.length === 0) {
                orders = <p style={{
                    border: '1px solid grey',
                    boxShadow: '1px 1px #888888',
                    borderRadius: '5px',
                    padding: '20px',
                    marginBottom: '10px'
                }}>You have no orders!</p>
            }
            else {
                orders = this.props.orders.map(order => {
                    return <Order order={order} key={order.id} />
                })
            }
        }
        return (
            <div>
                {this.props.orderLoading ? <Spinner /> : orders}
            </div >
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(orders);