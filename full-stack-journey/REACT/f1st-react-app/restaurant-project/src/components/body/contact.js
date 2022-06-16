import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            telNo: "",
            email: "",
            agree: false,
            contactType: 'Tel.',
            message: ""
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row row-content" style={{ paddingLeft: "20px", textAlign: "left" }}>
                    <div className="col-12">
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-7">
                        <Form>
                            <FormGroup row>
                                <Label htmlFor="firstName" md={2}>First Name :</Label>
                                <Col md={10}>
                                    <Input type="text" name="firstName" placeholder="First Name" value={this.state.firstName} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastName" md={2}>Last Name :</Label>
                                <Col md={10}>
                                    <Input type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telNo" md={2}>Telephone Number:</Label>
                                <Col md={10}>
                                    <Input type="tel" name="telNo" placeholder="Telephone Number" value={this.state.telNo} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>E-mail Address:</Label>
                                <Col md={10}>
                                    <Input type="text" name="email" placeholder="Email Address" value={this.state.email} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree" checked={this.state.agree} /><strong>May we Contact You?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input type="select" name="contactType" value={this.state.contactType}>
                                        <option>Telephone</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback :</Label>
                                <Col md={10}>
                                    <Input type="textarea" name="message" placeholder="Enter Your Feedback" value={this.state.message} rows="12" />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={{ size: 10, offset: 2 }}>
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

export default Contact;