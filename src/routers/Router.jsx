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
import PrivetRoute from "../Provider/PrivetRoute";
import EventDetails from "../Pages/Home/Card/EventDetails";
import BrowseEvents from "../Pages/Home/BrowseEvents";
import MyPostedEvents from "../Pages/Home/MyPostedEvents/MyPostedEvents";



export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorElement />,
    Component: Root,

    children: [
      {
        path: '/',
        index: true,
        Component: Home
      },
      {
        path: 'addEvent',
        element: <PrivetRoute>
          <AddEvent />
        </PrivetRoute>
      },
      {
        path: 'myPostedEvents',
        element: <PrivetRoute>
          <MyPostedEvents/>
        </PrivetRoute>
      },
      {
        path:'browseEvents',
        loader:()=>fetch('http://localhost:3000/events'),
        Component:BrowseEvents
      },
      {
        path: "events/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/events/${params.id}`),
        element: <PrivetRoute>
          <EventDetails/>
        </PrivetRoute>
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