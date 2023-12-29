import React from "react";
import { useState } from "react";
import "./styles.css";



function Counter1(){
    const [count, setcount] = useState(0);

    return <>
        <div className="container">
            <h1 className="number">{count}</h1>
            <section className="btn">
            <button className="inc" onClick={() => setcount(count+1)}>+</button>
            <button className="reset" onClick={() => setcount(0)}>Reset</button>
            <button className="dec" onClick={() => setcount(count-1)}>-</button>
            </section>
        </div>
    </>
}

export default Counter1;