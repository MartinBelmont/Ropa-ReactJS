import React from 'react';
import reactDom from 'react-dom';

const{useState} = React;

function Counter() {
    const [count, setCount] = useState(1);
    if (count > 5){
        setCount(count-5);
    } 
    if (count == 0){
        setCount(count+1);
    } 
    return(
        <div className="app">
            <h1>{count}</h1>
            <div className="button-wrapper">
                <button onClick = { ()=> setCount(count-1) }>-</button>
                <button onClick = { ()=> setCount(count+1) }>+</button>
            </div>
        </div>
    )
}

export default Counter