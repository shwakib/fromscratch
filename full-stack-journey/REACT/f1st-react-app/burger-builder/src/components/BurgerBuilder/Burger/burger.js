import React from "react";
import Ingredients from "../Ingredients/ingredients";

const burger = props => {
    return (
        <div>
            <Ingredients type="bread-top" />
            <Ingredients type="cheese" />
            <Ingredients type="salad" />
            <Ingredients type="meat" />
            <Ingredients type="bread-bottom" />
        </div>
    )
}

export default burger;