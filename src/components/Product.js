import React,{useContext} from "react";
import GlobalContext from "../GlobalContext";
import "./product.css";


const Product = ({ id, title, price, rating, image }) => {
    const {addProduct} = useContext(GlobalContext);


        const addToBasket = () => {
            console.log('clicked')
            addProduct({
                id,
                title,
                price,
                rating,
                image
            })
        }

  return (
    <div className="product">
        <div className="product__info">
        <p>{title}</p>
      <div className="product__price">
        <small>$</small>
        <strong>{price}</strong>
      </div>

      <div className="product__rating">
        {Array(rating)
          .fill()
          .map((_) => (
            <p>✨</p>
          ))}
        </div>
        </div>
   
          <img src={image} alt={title}/>
          <button onClick={addToBasket}>Add to Basket</button>
    
    </div>
  );
};

export default Product;
