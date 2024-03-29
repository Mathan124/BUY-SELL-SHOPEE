import React from "react";
import  "./css/navbar.css"
import background from './assets/circle.png'
import { Link } from "react-router-dom";

function Explore() {

    return (
        <div >
            <nav>
                <div className="one">
                    <img className="image" src="src/assets/logo.png" alt="logo" />
                </div>
                <div className="two">
                    <Link to="/login"><button className="login"><h4>Login</h4></button></Link>
                    <Link to="/register"><button className="login"><h4>Register</h4></button></Link>
                </div>
            </nav>
            <div>
            <img src={background} alt="banner image" style={{opacity:0.5, width: '100%', height: '85vh'}}/>
            </div>
            <div className="center">
                <p><strong><span style={{color: 'red'}}>BUY</span> the <span style={{color: 'blue'}}>Product</span> for you!</strong></p>
                <p><strong><span style={{color: 'red'}}>SELL</span> your <span style={{color: 'blue'}}>Product</span>!</strong></p>
                <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, molestiae!</p>
                <Link to="/card"><button className="explore">Explore Products</button></Link> 
            </div>
        </div>
    )
}

export default Explore;