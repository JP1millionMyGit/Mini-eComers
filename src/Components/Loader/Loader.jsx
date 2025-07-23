import './loader.css'
import { motion} from 'framer-motion';

const Img = motion.create('img');
const Div = motion.create('div');


function Loader(){
  return (
    <div className='loader'>
      <Div className='img'
        initial={{transform: 'rotate3d(0, 0, 1, 0)'}}
        animate={{transform: 'rotate3d(0, 0, 1, 360deg)'}}
        transition={{repeat: 10, repeatType: 'loop', ease: 'linear', duration: 5}}
      >
        <Img src='Logo.webp'
          initial={{opacity: .8, backdropFilter: 'blur(2px)'}}
          animate={{opacity: 1}}
          transition={{repeat: Infinity, repeatType: 'mirror', ease: 'easeIn', duration: 1}}
        />
      </Div>
    </div>
  )
}

export default Loader
