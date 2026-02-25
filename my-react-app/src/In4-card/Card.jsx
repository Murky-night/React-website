import profilePicture from '../assets/what-chu-looking-at-birch.png';
import styles from "./Card.module.css";
let Card = () => {

    return(
        <>
            <div className= {styles.card}>
                <img className= {styles.cardPic} src={profilePicture} alt = "profile picture"></img>
                <h2 className= {styles.cardTitle}>Nariyuki</h2>
                <p className= {styles.cardContent}>I learn react & react native</p>
            </div> 
        </>
    );
}

export default Card