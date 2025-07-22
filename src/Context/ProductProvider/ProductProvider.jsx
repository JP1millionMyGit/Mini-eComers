import ProductContext from "./ProductContext";
import { useCustomFetch } from "../../Hooks";

function ProductProvider({ children }){
  const { data, loading, error } = useCustomFetch('products', '*')


  return (
    <>
      <ProductContext.Provider value={{data, loading, error}}>
        {children}
      </ProductContext.Provider>
    </>
  )
}
export default ProductProvider
