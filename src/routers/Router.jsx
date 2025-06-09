import {
  createBrowserRouter,
 
} from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";
import ErrorElement from "../Pages/ErrorElement";



export const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorElement/>,
    Component:Root,

    children:[
        {
            path:'/',
            index:true,
            Component:Home
        },
        {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login
      },
      {
        path: "/auth/signUp",
        Component: SignUp
      },
    ]
  },
    ]

   
  },
]);