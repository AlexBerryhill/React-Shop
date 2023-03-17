// Libraries
import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
// Styles
import '../styles/Home.css';
// Images
import light_logo from '../assets/light-logo.png';
// import dark_logo from '../assets/dark-logo.png';
import arrow from '../assets/arrow.png';
import skateboltPhoto from '../assets/card01.png';
import skateboardCollection from '../assets/skateboard.png';
import accessoryCollection from '../assets/accessory-collection.png';

// Components
import ProductCard from "../components/ProductCard";

async function getProducts(){
    let res = await fetch("http://localhost:8000/products", {
        method: "GET",
        headers: {
            'Cache-Control': 'no-cache',
            'Accept': '*/*',
            'Accept-Encoding': 'gzip,deflate,br'
        }
    })
    console.log('waiting for response');
    return await res.json();
}

function Home(){
    const [productList, setProductList]=useState(null);
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

    useEffect(() => {
        getProducts().then((res) => {
            const products = res.products;
            let productListArray=[];
            for (let i = 0; i < products.length; i++) {
                const element = products[i];
                productListArray.push(
                        <ProductCard 
                            image =  {`data:image/png;base64,${element.image}`}
                            discount={element.discount}
                            name  =  {element.name}
                            brand =  {element.brand}
                            desc  =  {element.description}
                            price =  {element.price}
                        />
                    )
            }
            setProductList(productListArray)
        })
    }, [])

    return(
        <div>
            <header className="hero-section">
                <div className="content">
                    <img src={light_logo} className="logo" alt="" />
                    <p className="sub-heading">Skateboard's at a good price</p>
                </div>
            </header>
            <section className="product">
                <h2 className="product-category">best selling</h2>
                <button className="pre-btn"><img src={arrow} alt="left arrow" /></button>
                <button className="nxt-btn"><img src={arrow} alt="right arrow" /></button>
                <div className="product-container">
                    {productList}
                </div>
            </section>
            <section className="collection-container">
                <Link to='/search' state={{searchItem:'electric'}} className="collection">
                    <img src={skateboltPhoto} alt="electric skateboards" />
                    <p className="collection-title">Electric Skateboards</p>
                </Link>
                <Link to='/search' state={{searchItem:'skateboard'}} className="collection">
                    <img src={skateboardCollection} alt="skateboard" />
                    <p className="collection-title">Skateboards</p>
                </Link>
                <Link to='/search' state={{searchItem:'accesory'}} className="collection">
                    <img src={accessoryCollection} alt="accessory" />
                    <p className="collection-title">accessories</p>
                </Link>
            </section>
        </div>
    )
}

export default Home;