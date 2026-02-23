import profilePicture from "./assets/168012aec643913546d97a12a4e5bfec.png"
let Card = () => {

    return(
        <div className="card">
            <img className="card-pic"src={profilePicture} alt = "profile picture"></img>
            <h2 className="card-title">Nariyuki</h2>
            <p className="card-content">I learn react & react native</p>
        </div>
    );
}

export default Card