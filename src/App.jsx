import './App.css'
import { Outlet } from 'react-router-dom'
import { Footer, Loader, Menu, NavBar, Portal } from './Components'
import { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductContext } from './Context';
import { useMediaQuery } from './Hooks';

const Div = motion.create('div')


function App() {
  const { loading, error } = useContext(ProductContext);
  const [menu, setMenu] = useState(false);
  const isMobile = useMediaQuery('(max-width: 550px)')

  if(menu) document.body.classList.add('no-scroll')
  else document.body.classList.remove('no-scroll');

  const controlMenu = ()=>{
    setMenu(prev => !prev);
  }

  if (loading) return <Loader></Loader>
  if (error) return <p>Error: {error.message}</p>

  return (
    <>
      <Portal>
        <AnimatePresence mode='popLayout'>
          {
            menu && 
            <Div
              initial={isMobile? { x: '-100%' }: { y: '100%' }}
              animate={isMobile? { x: 0 }: { y: 0 }}
              exit={isMobile? { x: '-100%' }: { y: '100%' }}
              transition={{ease: 'linear'}}
            >
              <Menu 
                close={controlMenu}
              />
            </Div>
          }
        </AnimatePresence>
      </Portal>
      <NavBar 
        menu={controlMenu}
      />
      <AnimatePresence>
        <Div
          className='main-contain'
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: .3}}
        >
          <Outlet />
        </Div>
      </AnimatePresence>
      <AnimatePresence>
        <Div>
          <Footer />
        </Div>
      </AnimatePresence>
    </>
  )
}

export default App


// Cambio para comprobar el despliegue continuo

//Lo anterior no funciono al parecer porque el repo era privado, probando otra vez con repo publico