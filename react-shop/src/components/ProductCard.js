import React from "react";

function isDiscounted(discount){
    return discount!=0;
}

function DiscountTag({discount}){
    if (isDiscounted(discount)){
        return(
            <span class="discount-tag">{(discount*100)+'% off'}</span>
        )
    }
}

function PriceTag({discount, price}){
    if(isDiscounted(discount)){
        return(
            <div>
                <span class="price">{'$'+price*(1-discount)}</span>
                <span class="actual-price">{'$'+price}</span>
            </div>
        )
    }else{
        return(
            <span class="price">{'$'+price}</span>
        )
    }
}

function ProductCard({image, discount=0, brand, desc, price}){
    return(
        <div class="product-card">
                <div class="product-image">
                    <DiscountTag discount={discount}/>
                    <img src={image} class="product-thumb" alt="product card" />
                    <p class="card-btn">add to wishlist</p>
                </div>
                <div class="product-info">
                    <h2 class="product-brand">{brand}</h2>
                    <p class="product-short-des">{desc}</p>
                    <PriceTag 
                        discount={discount}
                        price={price}
                    />
                </div>
        </div>
    )
}

export default ProductCard;