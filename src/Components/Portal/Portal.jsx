import './portal.css'
import { createPortal } from 'react-dom'

function Portal({ children }){
  const modalRoot = document.getElementById('modal');
  return createPortal(children, modalRoot)
}

export default Portal
