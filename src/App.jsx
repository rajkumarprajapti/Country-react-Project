import './App.css';
import { Country } from './pages/Country';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { About } from './pages/About';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { AppLayout } from './components/layout/AppLayout';
import { ErrorPage } from './pages/ErrorPage';
import React from "react";

const router = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout />,
// yaha app layout karke files banai hai jiski maddaad se hum header or footers ek hi gajah par hi rahenge
// baki sare layout badalte rahenge


    children : [
      {
        path: "/",
        element : <Home />,
        // yeh error element is used for  generate the error when it did not get some error
        errorElement : <ErrorPage />
      },
      {
        path: "about",
        element : <About />
      },
      {
        path: "contact",
        element : <Contact />
      },
      {
        path: "country",
        element : <Country />
      },
    ]
  }
]);

export const App = ()=>{

  return(
    
      <RouterProvider router={router}></RouterProvider>
        

);
}
 

