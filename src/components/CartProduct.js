import React from 'react'
import './CartProduct.css'
const CartProduct = ({id,title,price,rating,image}) => {
    console.log(title,price)
    return (
        <div className="cartProduct">
            <img className="cartProduct__image" src={image} alt=""/>
            <div className="cartProduct__info">
                <h4 className="cartProduct__title">{title}</h4>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                    </p>
                    <div className="cartProduct__rating">
                        {Array(rating).fill().map((_,i) =>(
                            <p>✨</p>
                        ))}
                    </div>
                   
               
                <button>Remove from basket</button>
            </div>
        </div>
    )
}

export default CartProduct
