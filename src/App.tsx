import { useState } from "react";

import {
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchTest } from "./api/subdomainapi";
import { Login } from "./pages/auth/Login";
import FrontIndex from "./pages/auth/mainPages/FrontIndex";
import FrontLogin from "./pages/auth/mainPages/Auth/FrontLogin";
import TestSubPage from "./pages/SubPages/TestSubPage";

const subRoutes = createBrowserRouter([
  {
    path: "/",
    element: <p>subdomain home: {window.location.host}</p>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/testSubPage",
    element: <TestSubPage/>,
  },
]);

const mainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <FrontIndex/>
  },
  {
    path: "/login",
    element: <FrontLogin/>
  } 
])

function App() {

  const [count, setCount] = useState(0);

  // Queries
  const query = useQuery({ queryKey: ['todos'], queryFn: fetchTest })

  if (import.meta.env.PROD) { //im in production
    if ( //if on a subdomain 
      typeof window.location.host.split(".")[0] === "string" &&
      window.location.host.split(".").length >= 3
    ) {  
      return (
        <RouterProvider router={subRoutes}/>
      );
    } else { // else show the main thing
      return  <RouterProvider router={mainRoutes}/>;
    }
  } else { //im in local environment
    if (  //if on a subdomain
      typeof window.location.host.split(".")[0] === "string" &&
      window.location.host.split(".").length >= 3
    ) {
      return (
          <RouterProvider router={subRoutes}/>
      );
    } else {
      return (
        <RouterProvider router={mainRoutes}/>
      )
    }
  }
}

export default App;
