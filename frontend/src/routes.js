import { useRoutes } from "react-router-dom";

import Login from "./pages/Login";
import Reservation from "./pages/reservation";


export default function Router() {
  let element = useRoutes([
    { path: "/", element: <Login /> },
    { path: "/reservation", element: <Reservation /> },
    // { path: "/post:id", element: <Posts /> },
    // { path: "user", element: <User /> },
  ]);

  return element;
}