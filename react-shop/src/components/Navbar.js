import React from "react";
import '../styles/Navbar.css';
import dark_logo from '../assets/dark-logo.png';
import cart from '../assets/cart.png';
import user from '../assets/user.png'

function Home(){
    return(
        <nav class="navbar">
            <div class="nav">
                <img src={dark_logo} class="brand-logo" alt="logo" />
                <div class="nav-items">
                    <div class="search">
                        <input type="text" class="search-box" placeholder="search brand, product" />
                        <button class="search-btn">search</button>
                    </div>
                    <a href="#"><img src={user} alt="user" /></a>
                    <a href="#"><img src={cart} alt="cart" /></a>
                </div>
            </div>
        </nav>
    )
}

export default Home;