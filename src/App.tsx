import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import HomPage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import Layout from "./pages/Layout";
import DetailPage from "./pages/DetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomPage />,
      },
      {
        path: "/list",
        element: <ListPage />,
      },
      {
        path: "/detail/:id",
        element: <DetailPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
