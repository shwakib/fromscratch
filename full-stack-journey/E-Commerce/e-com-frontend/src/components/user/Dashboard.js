import Layout from '../Layout';
import { Link } from 'react-router-dom';
import { userInfo } from '../../utils/auth';
import { purchaseHistory } from '../../api/apiPurchaseHistory';
import { useEffect, useState } from 'react';
import OrderHistory from './OrderHistory';
// import { Modal, ModalBody, ModalFooter } from 'reactstrap';
// import Modal from 'react-modal';
import { Modal, Button } from 'react-bootstrap';

const Dashboard = () => {
    const [orders, setOrders] = useState([]);
    const [modalStatus, setModalStatus] = useState(false);
    const { name, email, role, _id, token } = userInfo();

    useEffect(() => {
        const data = {
            userID: _id
        }
        purchaseHistory(token, data)
            .then(response => { setOrders(response.data) })
    }, [])

    const viewDetails = item => () => {
        console.log(item);
        return (
            <div>
                <Modal show={modalStatus}>
                    <Modal.Header>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" >
                            Close
                        </Button>
                        <Button variant="primary" >
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }

    const UserLinks = () => {
        return (
            <div className="card">
                <h4 className="card-header">User Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/cart">My Cart</Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/shipping-address">Update Profile</Link>
                    </li>
                </ul>
            </div>
        )
    };

    const PurchaseHistory = () => (
        <div className="container my-5" style={{ margin: "-15px" }}>
            <h3 className="card-body">Purchase History</h3>
            <table className="table table-hover" >
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Order ID</th>
                        <th scope="col">Transaction ID</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Payment Status</th>
                        <th scope="col" align="right">Shipping Address</th>
                        <th scop="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((item, i) => <OrderHistory item={item} serial={i + 1} key={item._id} viewDetails={viewDetails(item)} />)}
                </tbody>
            </table>
        </div>
    );

    const UserInfo = () => (
        <div className="card mb-5">
            <h3 className="card-header">User Information</h3>
            <ul className="list-group">
                <li className="list-group-item">{name}</li>
                <li className="list-group-item">{email}</li>
                <li className="list-group-item" style={{ textTransform: "uppercase" }}>{role}</li>
            </ul>
        </div >
    );

    return (
        <Layout title="Dashboard" className="container-fluid">
            <div className="row">
                <div className="col-sm-3">
                    <UserLinks />
                </div>
                <div className="col-sm-9">
                    <UserInfo />
                    {orders ? <PurchaseHistory /> : ""}
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard;