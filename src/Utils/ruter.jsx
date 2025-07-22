import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Cart from "../Pages/Cart";
import Products from "../Pages/Products";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true , element: <Home /> },
      { path: '/cart', element: <Cart /> },
      { path: '/contact', element: <Contact /> },
      { path: '/products', element: <Products />, 
        children:[
          { path: '/products/ropa' }
        ] }
    ]
  }
]);