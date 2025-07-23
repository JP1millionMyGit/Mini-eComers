import { motion } from "framer-motion"

const SVG = motion.svg
const sizeIcon = {
  small: 20,
  big: 30,
  normal: 24
}

const IconPaths = {
  home: 
    (<path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 19v-8.5a1 1 0 0 0-.4-.8l-7-5.25a1 1 0 0 0-1.2 0l-7 5.25a1 1 0 0 0-.4.8V19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1"></path>),
  menu: 
    (<path fill="currentColor" d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"></path>),
  cart: 
    (<path fill="currentColor" d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z"></path>),
  close: 
    (<path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"></path>),
  down: 
    (<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m17 10l-5 5l-5-5"></path>),
  up: 
    (<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m17 14l-5-5l-5 5"></path>),
  search: 
    (<path fill="currentColor" fillRule="evenodd" d="M14.385 15.446a6.75 6.75 0 1 1 1.06-1.06l5.156 5.155a.75.75 0 1 1-1.06 1.06zm-7.926-1.562a5.25 5.25 0 1 1 7.43-.005l-.005.005l-.005.004a5.25 5.25 0 0 1-7.42-.004" clipRule="evenodd"></path>),
  filter: 
    (<path fill="currentColor" fillRule="evenodd" d="M17.986 5.424a54 54 0 0 0-11.972 0a.343.343 0 0 0-.228.556l3.517 4.348a8.75 8.75 0 0 1 1.947 5.503v2.889l1.5 1.1v-3.99a8.75 8.75 0 0 1 1.947-5.502l3.517-4.348a.343.343 0 0 0-.228-.556M5.848 3.933a55.4 55.4 0 0 1 12.305 0c1.446.162 2.143 1.858 1.228 2.99l-3.517 4.348a7.25 7.25 0 0 0-1.614 4.56V21.3a.75.75 0 0 1-1.194.605l-3-2.2a.75.75 0 0 1-.306-.605v-3.27c0-1.66-.57-3.269-1.613-4.56L4.62 6.924c-.916-1.132-.22-2.828 1.228-2.99" clipRule="evenodd"></path>),
}


function MyIcon({ icon, size, className, click }){

  return(
    <SVG 
      whileTap={{scale: .9}}

      initial={{scale: .8}}
      animate={{scale: 1}}
      exit={{scale: .8}}
      xmlns="http://www.w3.org/2000/svg" 
      width={sizeIcon[size]} 
      height={sizeIcon[size]} 
      viewBox="0 0 24 24"
      onClick={click}
      className={`icon ${className}`}
    >
      {IconPaths[icon]}
    </SVG>
  )
}


export default MyIcon