import './productCard.css'


function ProductCard({ big, img, nombre, description, price }){
  return (
    <div  className='conteiner-product'>
      <img className={`${big && 'big'}`} src={img} alt={nombre} />
      <div className='detalles'>
        <h4 className='product-name'>{nombre}</h4>
        <p>{description}</p>
        <span>${price}</span>
      </div>
    </div>
  )
}

export default ProductCard
