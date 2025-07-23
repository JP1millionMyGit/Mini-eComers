import { motion } from "framer-motion"
import { ConteinerProductCategory, Input, MyIcon } from "../Components"

const Div = motion.div

function Products(){
	return (
		<>
		<div className="filtrar-products">
			<Input key={'filtrar'} className={'filtrar'} placeholder='Filtrar Productos'
			/>
			<Div
				style={{borderRadius: '20px', aspectRatio: 1, overflow: 'hidden'}}
				initial={{scale: 1}}
				animate={{scale: 1.1 ,boxShadow: '0 0 10px 5px #957612'}}
				transition={{repeat: Infinity, duration: 1}}
			>
				<MyIcon icon={'filter'} size={'big'} className={'icon-filter'} />
			</Div>
		</div>
		<ConteinerProductCategory nombre={'Set-Girl'}/>
		<ConteinerProductCategory nombre={'Set-Man'}/>
		<ConteinerProductCategory nombre={'Watchs'}/>
		</>
	)
}

export default Products
