import { useContext } from "react"
import { CartContext } from "../Context"


function Cart(){
  const { cart } = useContext(CartContext);

  if(cart === 0) return(
    <div className="cart-vacio">
      <img src="CartVacio.jpg" />
    </div>
  )

  return (
    <h1>
    Carrito
    </h1>
  )
}

export default Cart
