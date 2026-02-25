import styles from "./Use-state.module.css";
import React, {useState} from "react";

let MyComponent = () => {

    const [count,setCount] = useState(0);

    const [name,setName] = useState("Guest")

    const incrementCount = () => {
        setCount(count + 1);
    }

    const decrementCount = () => {
        setCount(count - 1);
    }

    const resetCount = () => {
        setCount(0);
    }

    return (<div className={styles.counterContainer}> 
                <p className={styles.counter}>{count}</p>
                <button onClick={incrementCount} className= {styles.counterBtn}>Increment</button>
                <button onClick={resetCount} className= {styles.counterBtn}>Reset</button>
                <button onClick={decrementCount} className= {styles.counterBtn}>Decrement</button>
            </div>)
}

export default MyComponent