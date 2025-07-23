import { useContext } from "react"
import { CartContext } from "../Context"
import { motion } from "framer-motion";

const Img = motion.img

function Cart(){
  const { cart } = useContext(CartContext);

  if(cart === 0) return(
    <div className="cart-vacio">
      <Img
        src="CartVacio.webp"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: .3}}
      />
    </div>
  )

  return (
    <h1>
      Carrito
    </h1>
  )
}

export default Cart
