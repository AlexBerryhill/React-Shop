import React from "react";
import { Link } from "react-router-dom";
import '../styles/Links.css';

function Home(){
    return(
        <ul className="links-container">
            <li className="link-item"><Link to='/' className="link">home</Link></li>
            <li className="link-item"><Link to='/search' state={{searchItem:'electric'}} className="link">electric</Link></li>
            <li className="link-item"><Link to='/search' state={{searchItem:'skateboard'}} className="link">skateboards</Link></li>
            <li className="link-item"><Link to='/search' state={{searchItem:'accesory'}} className="link">accesories</Link></li>
        </ul>
    )
}

export default Home;