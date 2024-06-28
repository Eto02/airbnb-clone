import {
  LoaderFunction,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./index.css";
import { detailsPageLoader } from "./lib/loaders";
import AuthLayout from "./pages/AuthLayout";
import CreatePostPage from "./pages/CreatePostPage";
import DetailPage from "./pages/DetailPage";
import ProfileUpdatePage from "./pages/EditProfile";
import HomPage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ListPage from "./pages/ListPage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/SignUp";

const routes: RouteObject[] = [
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
        loader: detailsPageLoader as LoaderFunction,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/profile/update",
        element: <ProfileUpdatePage />,
      },
      {
        path: "/create/post",
        element: <CreatePostPage />,
      },
    ],
  },
];
const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
