import React, { Component, createRef } from "react";

// const newBook = (props) => {
//     // console.log(props);
//     return (
//         <div>
//             <h1>New Book Entry</h1>
//             <form>
//                 <label>Book Name:</label>
//                 <br />
//                 <input type="text" name="bookName" value="" /><br />
//                 <label>Writer</label><br />
//                 <input type="text" name="bookWriter" value="" /><br />
//                 <label>Description</label><br />
//                 <textarea type="text" name="description" value="" /><br />
//                 <input type='submit' value='Submit' />
//             </form>
//         </div>
//     );
// }

class newBook extends Component {
    constructor(props) {
        super(props);
        //Uncontrolled
        this.bookName = createRef();
        this.bookWriter = createRef();
        this.description = createRef();

        //Controlled
        /*this.state = {
            bookName: "",
            bookWriter: "",
            description: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);*/
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //Controlled
    /*handleInputChange = (event) => {
        // console.log(event.target.value);
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name, value);
        this.setState({
            [name]: value,
        })
    }*/

    handleSubmit = event => {
        //console.log(this.state);
        console.log(this.bookName.current.value);
        console.log(this.bookWriter.current.value);
        console.log(this.description.current.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>New Book Entry</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Book Name:</label>
                    <br />
                    <input type="text" name="bookName" /*Uncontrolled*/ ref={this.bookName} /*Controlled--value={this.state.bookName} onChange={this.handleInputChange}*/ /><br />
                    <label>Writer</label><br />
                    <input type="text" name="bookWriter" /*Uncontrolled*/ ref={this.bookWriter} /*Controlled--value={this.state.bookWriter} onChange={this.handleInputChange}*/ /><br />
                    <label>Description</label><br />
                    <textarea type="text" name="description" /*Uncontrolled*/ ref={this.description} /*Controlled--value={this.state.description} onChange={this.handleInputChange}*/ /><br />
                    <input type='submit' value='Submit' />
                </form>
            </div>
        );
    }
}

export default newBook;