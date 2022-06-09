import React, { Component } from "react";
import DISHES from '../../data/dishes';
import DishList from './dishList';
import DishDetail from './dishDetail'

class Menu extends Component {
    state = {
        dishes: DISHES,
        selectedDish: null
    }

    onSelect = (dish) => {
        console.log(dish);
        this.setState({ selectedDish: dish });
    }

    render() {
        const dishList = this.state.dishes.map(item => {
            return (
                <DishList dishes={item} key={item.id} onSelectDish={() => this.onSelect(item)} />
            )
        });
        let dishDetail = null;
        if (this.state.selectedDish != null) {
            dishDetail = <DishDetail selectedItem={this.state.selectedDish} />
        }

        return (
            < div className="container" >
                <div className="row">
                    <div className="col-6">
                        {dishList}
                    </div>
                    <div className="col-6">
                        {dishDetail}
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;