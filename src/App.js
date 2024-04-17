import {createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "../src/component/Navbar";
import Footer from "../src/component/Footer";
import Home from "../src/pages/Home";
import Register from "../src/pages/Register";
import Login from "../src/pages/Login";
import Single from "../src/pages/Single";
import Write from "../src/pages/Write"

import  "../src/style.scss";

  const Layout = () => {
    return(
      <>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {        
          path: '/',
          element: <Home/>
        },
        {        
          path: '/post/:id',
          element: <Single/>
        },
        {        
          path: '/Write',
          element: <Write/>
        }
      ]
    },
    { path: "/Login", element: <Login /> },
    { path: "/Register", element: <Register /> },

  ]);

function App() {
  return (
    <>
    <div className="app">
      <div className="container">
      <RouterProvider router={router} />
    </div>
    </div>
    </>
  );
}


export default App;
