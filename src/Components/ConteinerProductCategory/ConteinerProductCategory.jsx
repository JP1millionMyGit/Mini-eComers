import './conteinerProductCategory.css'
import ProductCard from '../ProductCard/ProductCard'
import { useContext } from 'react'
import ProductContext from '../../Context/ProductProvider/ProductContext'


function ConteinerProductCategory({ nombre='', option }){
  const { data } = useContext(ProductContext)

  return (
    <>
      <h2 className={`tittle-product-category ${option && 'big'}`}>{option? 'Destacados': nombre}</h2>
      <div className={`conteiner-product-category ${option && 'big'}`}>
        {
          data
            .filter(producto => producto.category === nombre.toLowerCase())
            .map((producto) => (
              <ProductCard
                key={producto.id || producto.nombre}
                img={producto.img}
                nombre={producto.nombre}
                description={producto.description}
                price={producto.price}
                big={option && 'big'}
              />
            ))
        }
      </div>
    </>
  )
}

export default ConteinerProductCategory
