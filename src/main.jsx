import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './Utils/ruter'
import { RouterProvider } from 'react-router-dom'
import ProductProvider from './Context/ProductProvider/ProductProvider'
import { CartProvider } from './Context'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <CartProvider>
        <RouterProvider router={router}/>
      </CartProvider>
    </ProductProvider>
  </StrictMode>
)
