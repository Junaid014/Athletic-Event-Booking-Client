import {
  createBrowserRouter,
 
} from "react-router";
import Root from "../Layouts/Root";

import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";
import ErrorElement from "../Pages/ErrorElement";
import AddEvent from "../Pages/Event/AddEvent";
import Home from "../Pages/Home/Home";



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
            path:'addEvent',
            Component:AddEvent
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