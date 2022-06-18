import React, { Component } from "react";
import { connect } from 'react-redux';

const mapStateToProps = state => {
    console.log("mapStateToProps", state);
    return {
        items: state.dishes,
    }
}

class Home extends Component {
    componentDidMount() {
        console.log("Home state:", this.state);
        console.log("Home props:", this.props);
    }
    render() {
        document.title = "Bohubrihi Restaurant";
        return (
            <div>

            </div>
        )
    }
};

export default connect(mapStateToProps)(Home);