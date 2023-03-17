import React from "react";
import { Link } from "react-router-dom";
import '../styles/Footer.css';
import light_logo from '../assets/light-logo.png'

function Footer(){
    return(
        <footer>
            <div className="footer-content">
                <img src={light_logo} className="logo" alt="" />
                <div className="footer-ul-container">
                    <ul className="category">
                        <li className="category-title">categories</li>
                        <li><Link to='/search' state={{searchItem:'electric'}} className="footer-link">electric skateboards</Link></li>
                        <li><Link to='/search' state={{searchItem:'skateboard'}} className="footer-link">skateboards</Link></li>
                        <li><Link to='/search' state={{searchItem:'accesory'}} className="footer-link">accessories</Link></li>
                    </ul>                    
                </div>
            </div>
            <p className="footer-title">about company</p>
            <p className="info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat tempore ad suscipit, eos eius quisquam sed optio nisi quaerat fugiat ratione et vero maxime praesentium, architecto minima reiciendis iste quo deserunt assumenda alias ducimus. Ullam odit maxime id voluptates rerum tenetur corporis laboriosam! Cum error ipsum laborum tempore in rerum necessitatibus nostrum nobis modi! Debitis adipisci illum nemo aperiam sed, et accusamus ut officiis. Laborum illo exercitationem quo culpa reprehenderit excepturi distinctio tempore cupiditate praesentium nisi ut iusto, assumenda perferendis facilis voluptas autem fuga sunt ab debitis voluptatum harum eum. Asperiores, natus! Est deserunt incidunt quasi placeat omnis, itaque harum?</p>
            <p className="info">support emails - help@skateboard.com, customersupport@skateboard.com</p>
            <p className="info">telephone - 180 00 00 001, 180 00 00 002</p>
            <div className="footer-social-container">
                <div>
                    <Link href="#" className="social-link">terms & services</Link>
                    <Link href="#" className="social-link">Privacy page</Link>
                </div>
                <div>
                    <Link href="#" className="social-link">instagram</Link>
                    <Link href="#" className="social-link">facebook</Link>
                    <Link href="#" className="social-link">twitter</Link>
                </div>
            </div>
            <p className="footer-credit">Alex Berryhill's Skateboard shop</p>
        </footer>
    )
}

export default Footer;