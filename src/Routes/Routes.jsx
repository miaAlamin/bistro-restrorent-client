

import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home";
import OurMenu from "../Pages/OurMenu";
import Order from "../Pages/Order";
import Login from "../Pages/login";
import SignUp from "../Pages/SignUp";
import Secret from "../secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../MainLayOut/Dashboard";
import Cart from "../MainLayOut/Cart";





const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/ourmenu",
            element: <OurMenu></OurMenu>
        },
        {
            path: "order/:category",
            element: <Order></Order>
        },
        {
            path: "login",
            element: <Login></Login>
        },
        {
            path: "secret",
            element: <PrivateRoute><Secret></Secret></PrivateRoute>
        },
        {
            path: "signup",
            element: <SignUp></SignUp>
        }
      ]
    },



    {
      path:'/dashboard',
      element: <Dashboard></Dashboard>,
      children:[
        {
          path: 'cart',
          element: <Cart></Cart>
        }
      ]
    }
  ]);

  export default router