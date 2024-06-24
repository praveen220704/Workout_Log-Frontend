import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeNav from "./wrappers/HomeNav";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import DashboardNav from "./wrappers/DashboardNav";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeNav />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardNav />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
