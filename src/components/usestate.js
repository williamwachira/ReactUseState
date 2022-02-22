import React, { useState } from "react";
const Counter = () => {
    const [count, setCounter] = useState(0);
    function counting() {
        setCounter(count + 1)
    }
    return (
        <div>
            <h1>The count is:  {count}</h1>
            <button onClick={counting}> counter button </button>
        </div>
        )

}
export default Counter;