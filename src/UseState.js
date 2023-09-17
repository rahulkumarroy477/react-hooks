import React, { useState } from 'react'

// we can use different useState for different param

function valuePassed(){
    console.log("Value called");
    return 0;
}
function UseState() {
    const [count, setCount] = useState(valuePassed);
    const [state,setState] = useState({count:0,name:"Rahul"});
    const increment = () => {
        // setCount(prevCount=>prevCount+1);
        setState(prevState=>{return ({...prevState,count:prevState.count+1})});
    }
    const decrement = () => {
        // setCount(count-1);   // not correct way of updation
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
            // setCount(prevCount => prevCount - 1);
        }
    }
    return (
        <div>
            <button className='btn' onClick={decrement}>-</button>
            <span className='txt'>{state.count}{state.name}</span>
            <button className='btn' onClick={increment}>+</button>
        </div>
    )
}

export default UseState;