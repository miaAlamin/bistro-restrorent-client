

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
import AlllUsers from "../MainLayOut/AlllUsers";
import AddItems from "../MainLayOut/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../MainLayOut/ManageItems";
import UpdateItems from "../MainLayOut/UpdateItems";
import Payment from "../MainLayOut/Payment";
import PaymentHistory from "../MainLayOut/PaymentHistory";





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
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path: 'cart',
          element: <Cart></Cart>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'paymentHistory',
          element: <PaymentHistory></PaymentHistory>
        },
        // admin routes
        { path: 'allusers', element: <><AlllUsers></AlllUsers></>  },

        { path: 'items', element: <AddItems></AddItems> },

        { path: 'manageItems', element: <ManageItems></ManageItems> },

        {
           path: 'updateItems/:id', 
          
          element: <UpdateItems></UpdateItems>,
          loader: ({params}) => fetch(`http://localhost:5000/mune/${params.id}`)



         },

      ]
    }
  ]);

  export default router