import styles from "./Counter.module.css";
import React, {useState} from "react";

let Counter = () => {

    const [count,setCount] = useState(0);

    const incrementCount = () => {
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    const decrementCount = () => {
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    const resetCount = () => {
        setCount(0);
    }

    return (<div className={styles.counterContainer}> 
                <p className={styles.counter}>{count}</p>

                <button onClick={decrementCount} className= {styles.counterBtn}>Decrement</button>
                <button onClick={resetCount} className= {styles.counterBtn}>Reset</button>
                <button onClick={incrementCount} className= {styles.counterBtn}>Increment</button>
                
            </div>)
}

export default Counter