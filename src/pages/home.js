import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/Home.css';
const Home =()=>{
    return(
        <div className="home">
            <div className="headerContainer">
                <h1>Yehya's Restaurant</h1>
                <p>The Restaurant that fit any taste</p>
                <Link to ="/menu">
                <button>Order now</button>
                </Link>
            </div>

        </div>
    )
}
export default Home;