import React from "react";
import Header from "./Header/header";
import BurgerBuilder from "./BurgerBuilder/burgerBuilder";

const mainComponent = props => {
    return (
        <div>
            <Header />
            <BurgerBuilder />
        </div>
    )
}

export default mainComponent;