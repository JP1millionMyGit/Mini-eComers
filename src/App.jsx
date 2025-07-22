import './App.css'
import { Outlet } from 'react-router-dom'
import { Footer, Loader, Menu, NavBar, Portal } from './Components'
import { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductContext } from './Context';

const Div = motion.create('div')


function App() {
  const { loading, error } = useContext(ProductContext);
  const [menu, setMenu] = useState(false);

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
              initial={{x: -400}}
              animate={{x: 0}}
              exit={{x: -500}}
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
