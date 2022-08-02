import React from "react";
import { View, Text, Image, StyleSheet, } from 'react-native';
import Icon from "../components/Icon";
import { addFavouriteDish } from "../redux/actionCreators";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        favouriteDish: state.favouriteDish
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addFavouriteDish: dish => dispatch(addFavouriteDish(dish))
    }
}

const DishDetail = props => {
    const dish = props.route.params.dish;
    const isFavourite = props.favouriteDish.some(item => item.id === dish.id);

    let iconName = "ios-heart-outline";

    const markFavouriteDish = dish => {
        if (isFavourite) {
            alert("This dish is already marked as Favourite!");
        }
        else {
            props.addFavouriteDish(dish);
        }
    }

    if (isFavourite) {
        iconName = "ios-heart-sharp";
    }
    return (
        <View>
            <Image source={{ uri: dish.image }} style={styles.image} />
            <View style={styles.details}>
                <Icon name={iconName} color='#F53B50' size={39} iconStyle={{ padding: 10 }} action={() => markFavouriteDish(dish)} />
                <Text style={{ textAlign: "justify", paddingTop: 10 }}>{dish.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300
    },
    details: {
        padding: 10,
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(DishDetail);