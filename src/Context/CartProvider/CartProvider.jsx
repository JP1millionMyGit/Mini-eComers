import { useState } from "react";
import CartContext from "./CartContext";


function CartProvider({children}){
  const [cart, setCart] = useState(0);
  function addAtCart(cant){
    setCart(prev => prev + cant)
  }


  return (
    <>
      <CartContext.Provider value={{cart, addAtCart}}>
        {children}
      </CartContext.Provider>
    </>
  )
}

export default CartProvider