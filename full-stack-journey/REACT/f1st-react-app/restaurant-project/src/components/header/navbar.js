import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom'

// const navBar = () => {
//     return (
//         <div>
//             <Navbar dark color="dark">
//                 <div><NavbarBrand style={{ right: "500px" }} href="/">Bohubrihi Restaurant</NavbarBrand></div>
//             </Navbar>
//         </div>
//     )
// }

class navBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
    }

    navToggle = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render() {
        return (
            <div>
                <Navbar dark color="dark" expand="sm" >
                    <NavbarToggler onClick={this.navToggle} />
                    <NavbarBrand href="/">Bohubrihi Restaurant</NavbarBrand>
                    <Collapse navbar isOpen={this.state.isNavOpen}>
                        <Nav className="mr-auto" style={{ textDecoration: 'none', color: 'white' }} navbar>
                            <NavItem>
                                <Link to='/' className="nav-link active">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/menu' className="nav-link">Menu</Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/about' className="nav-link">About</Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/contact' className="nav-link">Contact</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default navBar;