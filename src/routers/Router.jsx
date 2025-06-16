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
import UpdateEvent from "../Pages/Home/MyPostedEvents/UpdateEvent";
import MyBookings from "../Pages/Event/MyBookings";



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
        loader:()=>fetch('https://athletic-event-booking-platform-ser.vercel.app/events' ,{credentials:'include'}),
        Component:BrowseEvents
      },
      {
        path: "events/:id",
        loader: ({ params }) => fetch(`https://athletic-event-booking-platform-ser.vercel.app/events/${params.id}`),
        element: <PrivetRoute>
          <EventDetails/>
        </PrivetRoute>
      },
      {
        path: "updateEvent/:id",
        loader: ({ params }) => fetch(`https://athletic-event-booking-platform-ser.vercel.app/events/${params.id}`),
        Component:UpdateEvent
        
      },
      {
        path:'myBookings',
        element:<PrivetRoute>
          <MyBookings/>
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