import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import { Provider } from 'react-redux';
import Store from './Store/Store';
import Checkout from './Pages/Checkout';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import ProductDetail from './Pages/ProductDetail';
import Wishlist from './Pages/Whislist';
import Product from './Pages/Product';
import Footer from './Commponents/Footer';

const Router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[{
      path:"",
      element:<Home/>
    },
    {
      path:"/Login",
      element:<Login/>
    },
    {
      path:"/Cart",
      element:<Cart/>,
    },
    {
        path:"/Checkout",
        element:<Checkout/>
      },
      {
        path:"/SignUP",
        element:<SignUp/>
      },
      {
        path:"/product/:id",
        element:<ProductDetail />
      },
      {
        path:"/Wishlist",
        element:<Wishlist/>
      },
      {
        path:"/Product",
        element:<Product/>
      },
      {
        path:"/Footer",
        element:<Footer/>
      }
    
  ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={Store}>
 <RouterProvider router={Router}/>
  </Provider>
);


reportWebVitals();

