import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Route/Root';
import Home from './Pages/Home';
import AddCoffee from './Pages/AddCoffee';
import ErrorPage from './Components/ErrorPage';
import UpdateCoffee from './Pages/UpdateCoffee';
import SignIn from './Layout/SignIn';
import Register from './Layout/Register';
import SignUp from './Layout/SignUp';
// import AuthProvider from './Provider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children : [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:2000/coffee'),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader : ({params}) => fetch(`http://localhost:2000/coffee/${params.id}`)
      },
      {
        path : "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     {/* <AuthProvider> */}
     <RouterProvider router={router} />
     {/* </AuthProvider> */}
  </React.StrictMode>,
)
