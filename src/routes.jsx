import App from "./App";
import Store from "./Store";
import Items from "./Items";
import Bill from "./Bill"

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "store",
    element: <Store />,
  },
  {
    path: "store/items",
    element: <Items />,
  },
  {
    path: "bill",
    element: <Bill />
  }
];

export default routes;
