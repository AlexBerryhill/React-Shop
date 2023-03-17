import React from "react";

function isDiscounted(discount){
    return discount!==0;
}

function DiscountTag({discount}){
    if (isDiscounted(discount)){
        return(
            <span className="discount-tag">{(discount*100)+'% off'}</span>
        )
    }
}

function PriceTag({discount, price}){
    if(isDiscounted(discount)){
        return(
            <div>
                <span className="price">{'$'+Math.round((price*(1-discount)+Number.EPSILON)*100)/100}</span>
                <span className="actual-price">{'$'+price}</span>
            </div>
        )
    }else{
        return(
            <span className="price">{'$'+price}</span>
        )
    }
}

function ProductCard({image, discount=0, name, brand, desc, price}){
    return(
        <div className="product-card">
                <div className="product-image">
                    <DiscountTag discount={discount}/>
                    <img src={image} className="product-thumb" alt="product card" />
                    <p className="card-btn">add to wishlist</p>
                </div>
                <div className="product-info">
                    <h2 className="product-brand">{name}</h2>
                    <p className="product-short-des">{desc}</p>
                    <PriceTag 
                        discount={discount}
                        price={price}
                    />
                </div>
        </div>
    )
}

export default ProductCard;