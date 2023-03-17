import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import '../styles/Search.css'

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

function Search(){
    const [productList, setProductList]=useState(null);
    let { state } = useLocation();
    let searchItem = state.searchItem

    useEffect(() => {
        getProducts().then((res) => {
            const products = res.products;
            let productListArray=[];
            for (let i = 0; i < products.length; i++) {
                const element = products[i];
                if(element.name.toLowerCase().includes(searchItem) 
                || element.brand.toLowerCase().includes(searchItem)
                || element.category.toLowerCase().includes(searchItem)){
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
                    setProductList(productListArray)
                }
            }
        })
    }, [searchItem])
    return(
        <div className="search_grid">
            {productList}
        </div>
    )
}

export default Search;