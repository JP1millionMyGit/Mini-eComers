import './navBar.css'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../../Context';
import { MyIcon, Button } from '..';
import { motion } from 'framer-motion';


function NavBar({ menu }){
  const { cart } = useContext(CartContext)

  const navigate = useNavigate();
  const Home = ()=> navigate('/');
  const Cart = ()=> navigate('/cart')
  const IMG = motion.img

  return (
    <>
      <nav className='navBar-main'>
          <div className='actions'>
            <div className='IconMenu-Logo'>
              <MyIcon icon={'menu'} size={'big'} className='icon-menu' click={menu}/>
              <IMG key={'Logo'} onClick={Home} src="Logo.webp" alt="UrbanThreads" whileTap={{scale: .9}} />
            </div>
            <div className='div-icon-cart'>
              <MyIcon icon={'cart'} size={'big'} className='icon-cart' click={Cart}/>
              <label onClick={Cart} className='cantidad-products'>{cart}</label>
            </div>
          </div>
        <div className='sub-navBar-main'>
          <nav className="links">
            <Button>Lista de deseos</Button>
            <Button>Ofertas</Button>
            <Button>Nuevo</Button>
            <Button>Visto Recién</Button>
            <Button>Populares</Button>
          </nav>
          <div>
            <MyIcon icon={'search'} size={'big'} className='icon-search'  />
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
