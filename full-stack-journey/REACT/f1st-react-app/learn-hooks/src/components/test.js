import React, { useState } from 'react';

const Test = props => {
    const [myName, setMyName] = useState("");
    const [myInfo, setMyInfo] = useState({});

    const changeState = () => {
        setMyName("Rahim Chacha");
        setMyInfo({
            age: 30,
            address: "Dhaka,Bangladesh"
        })
    }
    return (
        <div>
            <button onClick={changeState}>Show Name</button>
            <h3>Name: {myName}</h3>
            <h3>Age: {myInfo.age}</h3>
            <h3>Address: {myInfo.address}</h3>
        </div>

    )
}

export default Test;