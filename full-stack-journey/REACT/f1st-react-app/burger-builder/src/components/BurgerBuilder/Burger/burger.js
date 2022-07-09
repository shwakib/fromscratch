import React from "react";
import Ingredients from "../Ingredients/ingredients";
import './burger.css'

const burger = props => {
    let ingredientArr = props.ingredients.map(item => {
        let amountArr = [...Array(item.amount).keys()];
        return amountArr.map(_ => {
            return <Ingredients type={item.type} key={Math.random()} />
        })
    })
        .reduce((arr, element) => {
            return arr.concat(element);
        }, []);

    if (ingredientArr.length === 0) {
        ingredientArr = <p style={{ paddingTop: '6px' }}>Please Add some Ingredients!</p>
    }
    // console.log(ingredientArr);
    return (
        <div className="Burger">
            <Ingredients type="bread-top" />
            {ingredientArr}
            <Ingredients type="bread-bottom" />
        </div>
    )
}

export default burger;