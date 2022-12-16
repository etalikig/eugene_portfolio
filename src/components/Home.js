import "./Home.css";
import Me from "../images/eugene.jpg";

function Home(){
    return(
        <div className="Home" id="home">
            <img src={Me} alt="me"/>
            <div className="home_details">
                <h3>Hi, I am</h3>
                <h1>Eugene C. Talikig</h1>
                <h3>Welcome to my paradise</h3>
            </div>
        </div>
    )
}

export default Home;
