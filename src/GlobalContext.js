import React, {
    createContext,
    useReducer,
  
} from "react";

import reducer from './reducer'

  const GlobalContext = createContext(); 

  export default GlobalContext; // export it for using inside useContext

  const initialState = {
    basket: [
      {
        id:"343243452",
        title:"New apple phone with best price",
        price:453.99,
        rating: 4,
        image:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-green-select-2019?wid=834&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1566956144838'
      },

      {
        id:"3432434342",
        title:"phone with best price",
        price:4543.45,
        rating: 5,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_EwlEoD4XghuNPelX18R9RdQ-rUeBNMypgQ&usqp=CAU'
      },

    ], 
     user: null,
  }
 

  export const GlobalProvider = ({ children }) => {
      let [basket, dispatch] = useReducer(reducer,initialState.basket);
      



      function addProduct(item)  {
        console.log(item)
         dispatch({
         type: "addProduct",
         payload:item
    })};
    

  
    return (
      <GlobalContext.Provider
        value={{
        addProduct,
        basket
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
  };
  