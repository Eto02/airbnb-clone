import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import HomPage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/SignUp";
import Layout from "./pages/Layout";
import AuthLayout from "./pages/AuthLayout";
import ProfileUpdatePage from "./pages/EditProfile";
import CreatePostPage from "./pages/CreatePostPage";

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
