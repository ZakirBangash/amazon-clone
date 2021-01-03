import React, {useContext} from 'react'
import GlobalContext from '../GlobalContext'
import CartProduct from './CartProduct'


const Cart = () => {
const {basket} = useContext(GlobalContext)

    return (
        <div className="cart">
            {basket?.length === 0 ? (
            <div>
                <h2>Your Shopping Basket is empty</h2>
                <p> You have no items in your basket.
                    To buy one or more click on "Add to Basket"
                </p>
            </div>
            ):(
                <div>
                <h2 className="cart__title">Your Shopping Basket</h2>
                { basket.map((item,i) => (
                    <CartProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>
            )}
        </div>
    )
}

export default Cart
