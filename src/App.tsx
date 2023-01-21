import { Children, useState } from "react";

import {
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchTest } from "./api/subdomainapi";
import { Login } from "./pages/auth/Login";
import TestSubPage from "./pages/SubPages/TestSubPage";
import BaseComp from "./routes/BaseComp";
import SubDomainRoutes from "./routes/SubDomainRoutes";

const subRoutes = createBrowserRouter([
  {
    path: "/*",
    element: <SubDomainRoutes />,
  }
]);

const mainRoutes = createBrowserRouter([
  {
    path: "/*",
    element: <BaseComp />,
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
        <RouterProvider router={subRoutes} />
      );
    } else { // else show the main thing
      return <RouterProvider router={mainRoutes} />;
    }
  } else { //im in local environment
    if (  //if on a subdomain
      typeof window.location.host.split(".")[0] === "string" &&
      window.location.host.split(".").length >= 3
    ) {
      return (
        <RouterProvider router={subRoutes} />
      );
    } else {
      return (
        <RouterProvider router={mainRoutes} />
      )
    }
  }
}

export default App;
