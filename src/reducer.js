const reducer = (state, action) => {
  console.log(state.basket)
    switch (action.type) {
      
      case "addProduct": {
        console.log(action.payload)
      
        return [ ...state,action.payload]
        
      }
      
      default:
        return state;
    }
  };

  export default reducer;