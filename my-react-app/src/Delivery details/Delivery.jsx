import React, {useState} from "react";
import styles from "./Delivery.module.css"

let DeliveryDetails = () => {

    const[name,setName] = useState("");
    const[quantity,setQuantity] = useState("");
    const[comment,setComment] = useState("")
    const[payment,setPayment] = useState("")
    const[ship,setShip] = useState("");

    let handleNameChange = (event) => {
        setName(event.target.value);
    }

    let handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    let handleCommentChange = (event) => {
        setComment(event.target.value);
    }

    let handlePaymentOption = (event) => {
        setPayment(event.target.value);
    }

    let handleShipOption = (event) => {
        setShip(event.target.value);
    }

    return (
        <>
            <div className = {styles.dataContainer}>
                <input  className = {styles.dataInput}
                        value = {name} 
                        onChange = {handleNameChange}/>

                <label className = {styles.dataLabel}>Name: {name}</label>
            </div>

            <div className = {styles.dataContainer}>
                <input  className = {styles.dataInput} 
                        type = "number" 
                        value = {quantity} 
                        onChange = {handleQuantityChange}/>

                <label className = {styles.dataLabel}>Quantity: {quantity}</label>
            </div>

            <div>
                <textarea   className = {styles.instruction}
                            value = {comment} 
                            onChange = {handleCommentChange}
                            placeholder="Enter delivery instruction"/><br/>
                                
                <label>Comment: {comment} </label>
            </div>

            <div>
                 <select className = {styles.instruction} value={payment} onChange={handlePaymentOption}>
                    <option value="">Select payment</option>
                    <option value="MBBank">MBBank</option>
                    <option value="Techcombank">Techcombank</option>
                    <option value="BIDV">BIDV</option>
                    <option value="Cash">Cash</option>
                </select><br/>

                <label>Payment method: {payment}</label>   
            </div>

            <div className = {styles.dataContainer}>
                <label>
                    <input  type="radio" 
                            value="Pick up" 
                            checked={ship === "Pick up"}
                            onChange={handleShipOption}/>
                    Pick up
                </label><br/>
                <label>
                    <input  type="radio" 
                            value="Delivery" 
                            checked={ship === "Delivery"}
                            onChange={handleShipOption}/>
                    Delivery
                </label><br/>
                <label>Shipping option: {ship}</label>
            </div>
        </>
    );
}

export default DeliveryDetails