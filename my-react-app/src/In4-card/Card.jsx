import profilePicture from '../assets/Profile-picture.png';
import styles from "./Card.module.css";
let Card = () => {

    return(
        <>
            <div className= {styles.card}>
                <img className= {styles.cardPic} src={profilePicture} alt = "profile picture"></img>
                <h2 className= {styles.cardTitle}>Đăng Khôi</h2>
                <p className= {styles.cardContent}>I learn front-end development</p>
            </div> 
        </>
    );
}

export default Card