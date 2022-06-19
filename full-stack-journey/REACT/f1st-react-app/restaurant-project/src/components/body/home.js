import React, { Component } from "react";
import { connect } from 'react-redux';
import Loading from './loading';

class Home extends Component {
    render() {
        document.title = "Bohubrihi Restaurant";
        return (
            <div>
                <Loading />
            </div>
        )
    }
};

export default Home;