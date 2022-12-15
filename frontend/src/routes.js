import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";

import Login from "./pages/Login";
import Reservation from "./pages/reservation";


export default function Router() {
  let element = useRoutes([
    { path: "/", element: <Login /> },
    { path: "/reservation", element: <Reservation /> },
    { path: "/home", element: <Home/>},
    // { path: "/post:id", element: <Posts /> },
    // { path: "user", element: <User /> },
  ]);

  return element;
}