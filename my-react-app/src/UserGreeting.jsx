let UserGreeting = ({username = "Guest",isLoggedIn}) => {

    const welcomeMessage = <h2 className="welcome-message">
        Welcome {username}
    </h2>

    const loginAlert = <h2 className="login-instruction">
        You need to log in first
    </h2>

    return(isLoggedIn ? welcomeMessage : loginAlert);

}

export default UserGreeting