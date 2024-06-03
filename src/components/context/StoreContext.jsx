import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/assets";


// Here, createContext(null) creates a new Context object called StoreContext.with initial value of null.
// StoreContext will be used to provide and consume context data in the component tree.
export const StoreContext = createContext(null)

// This part defines a React component named StoreContextProvider.
// Inside this component, an empty object { } is assigned to contextValue. Which will hold the data you want to share across components. The StoreContextProvider component returns a StoreContext.Provider component.
const StoreContextProvider = (props) => {

  const [cartItems, setCartItems] = useState({})

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems])


  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart
  }
  return (

    // StoreContext.Provider is a special component that comes with the Context object created earlier.
    // The value prop of StoreContext.Provider is set to contextValue. This value is what will be shared with any component that consumes this context.
    <StoreContext.Provider value={contextValue}>
      {/* {props.children} ensures that any child components wrapped by StoreContextProvider will be rendered and have access to the context value. */}
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider


// In simple terms, this code sets up a context in React to easily share data across different components without passing props manually. The StoreContextProvider component wraps around other components to provide them with the context value.