import React from 'react'

function Person() {
    // return (
    //     <div>
    //         <h1>I am Person element</h1>
    //     </div>
    // )
    return React.createElement('div', null, React.createElement('h1', null, 'I am person element!'));
}

export default Person;