import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import './footer.css'


function Footer (){
  return (
    <footer className='footer-main'>
      <section className='footer-main-section section-politics'>
        <Link>Política de Privacidad</Link>
        <Link>Política de Reenvolso</Link>
        <Link>Política de Entrega</Link>
        <Link>Generar una queja</Link>
      </section>
      <section className='footer-main-section section-contact'>
        <Link>Sobre Nosotros</Link>
      </section>
      <section className='footer-main-section section-task'>
        <Link>Sobre Nosotros</Link>
      </section>
    </footer>
  )
}

export default Footer
