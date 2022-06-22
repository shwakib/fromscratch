import React, { Component } from "react";
import { Button, FormGroup, Label, Col, Alert } from 'reactstrap';
import { Form, Control, Errors, actions } from 'react-redux-form';
import { connect } from 'react-redux';
import axios from 'axios';
import { baseURL } from "../../redux/baseURL";

const mapDispatchToProps = dispatch => {
    return {
        resetFeedbackForm: () => {
            dispatch(actions.reset('feedback'))
        }
    }
}

const required = val => val && val.length;
const isNumber = val => !isNaN(Number(val));
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
    state = {
        alertShow: false,
        alertText: null,
        alertType: null
    }

    handleSubmit = values => {
        //console.log(values);
        axios.post(baseURL + 'feedback', values)
            .then(response => response.status)
            .then(status => {
                if (status === 201) {
                    this.setState({
                        alertShow: true,
                        alertText: "Submitted Successfully",
                        alertType: "success"
                    });
                    setTimeout(() => {
                        this.setState({
                            alertShow: false
                        })
                    }, 2000)
                }
            })
            .catch(error => {
                this.setState({
                    alertShow: true,
                    alertText: error.message,
                    alertType: "danger"
                })
                setTimeout(() => {
                    this.setState({
                        alertShow: false
                    })
                }, 2000)
            })
        this.props.resetFeedbackForm();
    }
    render() {
        document.title = "Contact Us";
        return (
            <div className="container">
                <div className="row row-content" style={{ paddingLeft: "20px", textAlign: "left" }}>
                    <div className="col-12" style={{ padding: "10px 0px 10px 15px" }}>
                        <h3>Send us your Feedback</h3>
                        <Alert isOpen={this.state.alertShow} color={this.state.alertType}>{this.state.alertText}</Alert>
                    </div>
                    <div className="col-12 col-md-7">
                        <Form model='feedback' onSubmit={values => { this.handleSubmit(values) }}>
                            <FormGroup row>
                                <Label htmlFor="firstName" md={2}>First Name :</Label>
                                <Col md={10}>
                                    <Control.text model='.firstname' name="firstName" placeholder="First Name" className="form-control" validators={{ required }} />
                                    <Errors className="text-danger" model='.firstname' show="touched" messages={
                                        {
                                            required: "Required"
                                        }
                                    } />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastName" md={2}>Last Name :</Label>
                                <Col md={10}>
                                    <Control.text model='.lastname' name="lastName" placeholder="Last Name" className="form-control" validators={{ required }} />
                                    <Errors className="text-danger" model='.lastname' show="touched" messages={
                                        {
                                            required: "Required"
                                        }
                                    } />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telNo" md={2}>Telephone Number:</Label>
                                <Col md={10}>
                                    <Control.text model='.telnum' name="telnum" placeholder="Telephone Number" maxLength="11" minLength="11" className="form-control" validators={{ required, isNumber }} />
                                    <Errors className="text-danger" model='.telnum' show="touched" messages={
                                        {
                                            required: "Required/",
                                            isNumber: "Invalid Telephone Number"
                                        }
                                    } />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>E-mail Address:</Label>
                                <Col md={10}>
                                    <Control.text model='.email' name="email" placeholder="Email Address" className="form-control" validators={{ required, validEmail }} />
                                    <Errors className="text-danger" model='.email' show="touched" messages={
                                        {
                                            required: "Required/",
                                            validEmail: "Invalid E-mail Address"
                                        }
                                    } />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 5, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Control.checkbox model='.agree' name="agree" className="form-check-input" /><strong>May we Contact You?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 4, offset: 1 }}>
                                    <Control.select model='.contacttype' name="contactType" className="form-control">
                                        <option>Select One Method</option>
                                        <option>Telephone</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback :</Label>
                                <Col md={10}>
                                    <Control.textarea model='.message' name="message" placeholder="Enter Your Feedback" rows="12" className="form-control" validators={{ required }} />
                                    <Errors className="text-danger" model='.message' show="touched" messages={
                                        {
                                            required: "Required"
                                        }
                                    } />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 12, offset: 2 }}>
                                    <Button type="submit" color="success">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
};

export default connect(null, mapDispatchToProps)(Contact);