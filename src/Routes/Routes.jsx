import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home/Home";
import AddCoffeeForm from "../Pages/AddCoffeeForm/AddCoffeeForm";
import AddedCoffee from "../Pages/Home/AddedCoffee/AddedCoffee";
import UpdateCoffee from "../Pages/UpdateCoffee/UpdateCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addedCoffee",
        element: <AddedCoffee />,
      },
      {
        path: "/addCoffee",
        element: <AddCoffeeForm />,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
      },
    ],
  },
]);

export default router;
