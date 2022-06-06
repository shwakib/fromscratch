import React from "react";
import { Navbar, NavbarBrand } from 'reactstrap';

const navBar = () => {
    return (
        <div>
            <Navbar dark color="dark">
                <div><NavbarBrand style={{ right: "500px" }} href="/">Bohubrihi Restaurant</NavbarBrand></div>
            </Navbar>
        </div>
    )
}

export default navBar;