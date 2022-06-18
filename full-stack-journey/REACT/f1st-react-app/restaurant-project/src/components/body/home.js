import React, { Component } from "react";
import { connect } from 'react-redux';

const mapStateToProps = state => {
    // console.log("mapStateToProps", state);
    return {
        items: state.dishes,
        sample: state.sample
    }
}

class Home extends Component {
    componentDidMount() {
        console.log("Home props:", this.props);
        this.props.dispatch({
            type: 'TEST',
            str: "Sifat Hasan Wakib"
        })
    }
    componentDidUpdate() {
        console.log("Home props Updated:", this.props);
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