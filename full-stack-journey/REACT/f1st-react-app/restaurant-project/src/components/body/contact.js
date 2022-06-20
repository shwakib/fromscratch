import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form'

class Contact extends Component {
    handleSubmit = values => {
        console.log(values);
    }
    render() {
        document.title = "Contact Us";
        return (
            <div className="container">
                <div className="row row-content" style={{ paddingLeft: "20px", textAlign: "left" }}>
                    <div className="col-12" style={{ padding: "10px 0px 10px 15px" }}>
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-7">
                        <LocalForm onSubmit={values => { this.handleSubmit(values) }}>
                            <FormGroup row>
                                <Label htmlFor="firstName" md={2}>First Name :</Label>
                                <Col md={10}>
                                    <Control.text model='.firstname' name="firstName" placeholder="First Name" className="form-control" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastName" md={2}>Last Name :</Label>
                                <Col md={10}>
                                    <Control.text model='.lastname' name="lastName" placeholder="Last Name" className="form-control" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telNo" md={2}>Telephone Number:</Label>
                                <Col md={10}>
                                    <Control.text model='.telnum' name="telNo" placeholder="Telephone Number" maxLength="11" minLength="11" className="form-control" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>E-mail Address:</Label>
                                <Col md={10}>
                                    <Control.text model='.email' name="email" placeholder="Email Address" className="form-control" />
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
                                    <Control.textarea model='.message' name="message" placeholder="Enter Your Feedback" rows="12" className="form-control" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 12, offset: 2 }}>
                                    <Button type="submit" color="success">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </LocalForm>
                    </div>
                </div>
            </div>
        )
    }
};

export default Contact;