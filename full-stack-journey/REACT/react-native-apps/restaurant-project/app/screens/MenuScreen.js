import React, { useEffect } from "react";
import { View, Text, Button } from 'react-native';
import { Connect } from "react-redux";
import { getDishes } from '../redux/actionCreators';

const mapStateToProps = state => {
    return {
        dishes: state.dishes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDishes: () => dispatch(getDishes())
    }
}

const MenuScreen = props => {
    useEffect(() => {
        props.getDishes();
    }, [])
    return (
        <View>
            <Text>Menu Screen</Text>
            <Button title="Press" onPress={() => { props.navigation.navigate("Dish Detail") }} />
        </View>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen);