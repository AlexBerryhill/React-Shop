// Libraries
import React from "react";
// Styles
import '../styles/Home.css';
// Images
import light_logo from '../assets/light-logo.png';
import dark_logo from '../assets/dark-logo.png';
import arrow from '../assets/arrow.png';
import skateboltPhoto from '../assets/card01.png';
import backfirePhoto from '../assets/card02.png';
import skateboardCollection from '../assets/skateboard.png';
import accessoryCollection from '../assets/accessory-collection.png';

// Components
import ProductCard from "../components/ProductCard";

function Home(){
    const productContainers = [...document.querySelectorAll('.product-container')];
    const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
    const preBtn = [...document.querySelectorAll('.pre-btn')];

    productContainers.forEach((item, i) => {
        let containerDimenstions = item.getBoundingClientRect();
        let containerWidth = containerDimenstions.width;

        nxtBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        })

        preBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        })
    })
    return(
        <div>
            <header class="hero-section">
                <div class="content">
                    <img src={light_logo} class="logo" alt="" />
                    <p class="sub-heading">e-commerce sites are my specialty</p>
                </div>
            </header>
            <section class="product">
                <h2 class="product-category">best selling</h2>
                <button class="pre-btn"><img src={arrow} alt="left arrow" /></button>
                <button class="nxt-btn"><img src={arrow} alt="right arrow" /></button>
                <div class="product-container">
                    <ProductCard 
                        image =  {skateboltPhoto}
                        discount={.50}
                        brand =  {'Skatebolt'}
                        desc  =  {'Electric Longboard by Skatebolt'}
                        price =  {400}
                    />
                    <ProductCard 
                        image =  {backfirePhoto}
                        brand =  {'Backfire'}
                        desc  =  {'Electric Longboard by Backfire'}
                        price =  {400}
                    />
                    <ProductCard 
                        image =  {skateboltPhoto}
                        discount={.50}
                        brand =  {'Skatebolt'}
                        desc  =  {'Electric Longboard by Skatebolt'}
                        price =  {400}
                    />
                    <ProductCard 
                        image =  {skateboltPhoto}
                        discount={.50}
                        brand =  {'Skatebolt'}
                        desc  =  {'Electric Longboard by Skatebolt'}
                        price =  {400}
                    />
                </div>
            </section>
            <section class="collection-container">
                <a href="#" class="collection">
                    <img src={skateboltPhoto} alt="electric skateboards" />
                    <p class="collection-title">Electric Skateboards</p>
                </a>
                <a href="#" class="collection">
                    <img src={skateboardCollection} alt="skateboard" />
                    <p class="collection-title">men apparels</p>
                </a>
                <a href="#" class="collection">
                    <img src={accessoryCollection} alt="accessory" />
                    <p class="collection-title">accessories</p>
                </a>
            </section>
        </div>
    )
}

export default Home;