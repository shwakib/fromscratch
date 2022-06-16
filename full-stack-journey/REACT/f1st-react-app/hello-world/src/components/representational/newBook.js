import React, { Component } from "react";

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
        this.state = {
            bookName: "",
            bookWriter: "",
            description: ""
        }
    }

    handleInputChange = (event) => {
        console.log(event.target.value);
        const name = event.target.name;
        const value = event.target.value;
        console.log(name, value);
        this.setState({
            [name]: value,
        })
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h1>New Book Entry</h1>
                <form>
                    <label>Book Name:</label>
                    <br />
                    <input type="text" name="bookName" value={this.state.bookName} onChange={(event) => this.handleInputChange(event)} /><br />
                    <label>Writer</label><br />
                    <input type="text" name="bookWriter" value={this.state.bookWriter} onChange={(event) => this.handleInputChange(event)} /><br />
                    <label>Description</label><br />
                    <textarea type="text" name="description" value={this.state.description} onChange={(event) => this.handleInputChange(event)} /><br />
                    <input type='submit' value='Submit' />
                </form>
            </div>
        );
    }
}

export default newBook;