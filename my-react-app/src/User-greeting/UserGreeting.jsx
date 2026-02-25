import styles from "./Greeting.module.css"

let UserGreeting = ({username = "Guest",isLoggedIn}) => {

    const welcomeMessage = <h2 className= {styles.welcomeMessage}>
        Welcome {username}
    </h2>

    const loginAlert = <h2 className= {styles.loginInstruction}>
        You need to log in first
    </h2>

    return(isLoggedIn ? welcomeMessage : loginAlert);

}

export default UserGreeting