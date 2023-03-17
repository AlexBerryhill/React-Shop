import React, { useState, useEffect } from "react";
import '../styles/Navbar.css';
import dark_logo from '../assets/dark-logo.png';
import cart from '../assets/cart.png';
import user from '../assets/user.png';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";




function Home(){
    const [message, setMessage] = useState('');
    const [updated, setUpdated] = useState(message);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setMessage(e.target.value);
    };

    const handleClick = (e) => {
        e.preventDefault();
        // "message" stores input field value
        setUpdated(message);
    };

    useEffect(() => {
        if(updated !== ''){
            console.log(updated)
            navigate('/search',{state:{searchItem:updated}})
        }
    },[updated, navigate])

    return(
        <nav className="navbar">
            <div className="nav">
                <Link to='/' className="link"><img src={dark_logo} className="brand-logo" alt="logo" /></Link>
                <div className="nav-items">
                    <form className="search">
                        <input 
                            type="text" 
                            className="search-box" 
                            placeholder="search brand, product" 
                            onChange={handleChange}
                            value={message}
                        />
                        <button 
                            className="search-btn"
                            onClick={handleClick}
                        >search</button>
                    </form>
                    <Link className="icons"><img src={user} alt="user" /></Link>
                    <Link className="icons"><img src={cart} alt="cart" /></Link>
                </div>
            </div>
        </nav>
    )
}

export default Home;