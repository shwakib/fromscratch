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
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange = event => {
        const pName = event.target.name;
        const pValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        // console.log(pName, pValue);
        this.setState({
            [pName]: pValue
        });
    }
    handleSubmit = event => {
        console.log(this.state);
        event.preventDefault();
    }
    render() {
        return (
            <div className="container">
                <div className="row row-content" style={{ paddingLeft: "20px", textAlign: "left" }}>
                    <div className="col-12" style={{ padding: "10px 0px 10px 15px" }}>
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-7">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstName" md={2}>First Name :</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange} type="text" name="firstName" placeholder="First Name" value={this.state.firstName} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastName" md={2}>Last Name :</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange} type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telNo" md={2}>Telephone Number:</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange} type="tel" name="telNo" placeholder="Telephone Number" value={this.state.telNo} maxLength="11" minLength="11" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>E-mail Address:</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange} type="email" name="email" placeholder="Email Address" value={this.state.email} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 5, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input onChange={this.handleInputChange} type="checkbox" name="agree" checked={this.state.agree} /><strong>May we Contact You?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 4, offset: 1 }}>
                                    <Input onChange={this.handleInputChange} type="select" name="contactType" value={this.state.contactType}>
                                        <option>Select One Method</option>
                                        <option>Telephone</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback :</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange} type="textarea" name="message" placeholder="Enter Your Feedback" value={this.state.message} rows="12" />
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

export default Contact;