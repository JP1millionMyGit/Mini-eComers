import './menu.css'
import { IconClose, IconDown, IconUp } from "../Icons/Icons";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';


const Ul = motion.create('ul')

const menuItems = [
  {
    section: [
      {
        label: 'Home',
        to: '/'
      },
      {
        label: 'Ir al Carrito',
        to: '/cart'
      },
      {
        label: 'Ver Categorías',
        children: [
          {
            label: 'Ropa',
            to: '/'
          },
          {
            label: 'Calzado',
            to: '/'
          },
          {
            label: 'Prendas',
            to: '/'
          },
          {
            label: 'Accesorios',
            to: '/'
          },
        ]
      },
      {
        label: 'Productos al Azar',
        to: '/cart'
      }
    ]
  },
  {
    section:[
      {
        label: 'Probar',
        to: '/'
      },
      {
        label: 'Ir a Prueba',
        to: '/cart'
      },
      {
        label: 'Otras',
        children: [
          {
            label: 'Otras 1',
            to: '/'
          },
          {
            label: 'Otras 2',
            to: '/'
          },
          {
            label: 'Otras 3',
            to: '/'
          },
          {
            label: 'Otras 4',
            to: '/'
          },
          {
            label: 'Otras 5',
            to: '/'
          },
        ]
      }
    ]
  }
]

function Menu({ close }){
  const [openItem, setOpenItem]= useState(null);

  const toggleItem = (label)=>{
    setOpenItem(openItem === label? null : label)
  }

  return (
    <div onClick={close} className='overlay-menu'>
      <IconClose click={()=>{close}} />
      <div onClick={(e)=>{e.stopPropagation()}} className='menu'>
        <img src="Logo.png" />
        <div className='tittle'>
          <h2>Thread Menu</h2>
        </div>
        <ul className='conteiner-item-menu'>
          {menuItems.map((section, index)=>(
            <>
              {section.section && (
                <section key={index} className='section-menu'>
                  {section.section.map((item, index)=>(
                    item.children? (
                      <>
                        <div>
                          <label className={openItem === item.label? 'after' : undefined} key={item.label} onClick={()=> toggleItem(item.label)}>
                            {item.label} 
                            <AnimatePresence>
                              {openItem === item.label? <IconUp /> : <IconDown />}
                            </AnimatePresence>
                          </label>
                        </div>
                        <AnimatePresence>
                          {openItem === item.label && (
                            <Ul key={index} className='sub-section-menu'
                              initial={{height: 0}}
                              animate={{height: 'auto'}}
                              exit={{height: 0}}
                              transition={{ease: 'circIn'}}
                            >
                              {item.children.map((child)=>(
                                <li key={child.label} onClick={close}>
                                  <Link to={child.to}>{child.label}</Link>
                                </li>
                              ))}
                            </Ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) :
                    <li key={item.label} onClick={close}>
                      <Link to={item.to}>{item.label}</Link>
                    </li>
                  ))}
                </section>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
    
  )
}

export default Menu
