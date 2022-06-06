import React from "react";
import { Navbar, NavbarBrand } from 'reactstrap';

const navBar = () => {
    return (
        <div>
            <Navbar dark color="dark">
                <div className="container"><NavbarBrand href="/">Bohubrihi Restaurant</NavbarBrand></div>
            </Navbar>
        </div>
    )
}

export default navBar;