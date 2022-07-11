import React, { useState, useEffect } from 'react';

const Test = props => {
    const [myName, setMyName] = useState("");
    const [myInfo, setMyInfo] = useState({
        a: "Hello",
        b: "World"
    });

    const changeState = () => {
        setMyName("Rahim Chacha");
        // setMyInfo(myInfo.concat("I Am Back!"));
        setMyInfo({
            ...myInfo,
            b: "New World"
        })
    }

    useEffect(() => {
        console.log("My Info:", myInfo);
    }, [myInfo, myName]);

    return (
        <div>
            <button onClick={changeState}>Change</button>
        </div>

    )
}

export default Test;