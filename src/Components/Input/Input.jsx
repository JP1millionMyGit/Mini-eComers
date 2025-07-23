import { motion } from 'framer-motion'
import './input.css'

const MyInput = motion.input

function Input({ className, placeholder, nombre, id, children }){
  return (
    <>
      <MyInput 
        placeholder={placeholder}
        name={nombre}
        id={id}
        className={`input ${className}`}
      />
      {children}
    </>
  )
}

export default Input
