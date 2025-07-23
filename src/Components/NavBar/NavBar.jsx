import './navBar.css'
import { useNavigate } from 'react-router-dom'
import IconMenu, { IconCart, IconSearch } from '../Icons/Icons'
import Button from '../Button/Button';
import { useContext } from 'react';
import { CartContext } from '../../Context';


function NavBar({ menu }){
  const { cart } = useContext(CartContext)

  const navigate = useNavigate();
  const Home = ()=> navigate('/');
  const Cart = ()=> navigate('/cart')


  return (
    <>
      <nav className='navBar-main'>
          <div className='actions'>
            <div className='IconMenu-Logo'>
              <IconMenu click={menu}/>
              <img onClick={Home} src="Logo.webp" alt="UrbanThreads" />
            </div>
            <div className='div-icon-cart'>
              <IconCart click={Cart}/>
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
            <IconSearch />
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
