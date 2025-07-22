import { motion, AnimatePresence } from "framer-motion"
import './button.css'

const MyButton = motion.create('button');

function Button({ children, click}){
    return(
        <AnimatePresence mode="wait">
          <MyButton
            initial={{transform: 'scale(.9)', opacity: 0}}
            animate={{transform: 'scale(1)', opacity: 1}}
            transition={{duration: .2}}
            whileTap={{transform: 'scale(.95)', backgroundColor: '#0005'}}
            onClick={click}
          >
              <div className="content">
                  {children}
              </div>
          </MyButton>
        </AnimatePresence>
    )
}

export default Button
