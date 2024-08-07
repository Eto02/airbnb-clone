import {
  LoaderFunction,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./index.css";
import {
  detailsPageLoader,
  listPageLoader,
  profilePageLoader,
} from "./lib/loaders";
import AuthLayout from "./pages/AuthLayout";
import { AuthPage } from "./pages/AuthPage";
import CreatePostPage from "./pages/CreatePostPage";
import DetailPage from "./pages/DetailPage";
import ProfileUpdatePage from "./pages/EditProfile";
import JumpToSection from "./pages/JumToSection";
import Layout from "./pages/Layout";
import ListPage from "./pages/ListPage";
import Profile from "./pages/Profile";
import SavedPost from "./pages/SavedPost";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <JumpToSection />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/list",
        element: <ListPage />,
        loader: listPageLoader as LoaderFunction,
      },
      {
        path: "/detail/:id",
        element: <DetailPage />,
        loader: detailsPageLoader as LoaderFunction,
      },
      {
        path: "/login",
        element: <AuthPage />,
      },
      {
        path: "/register",
        element: <AuthPage />,
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
        loader: profilePageLoader as LoaderFunction,
      },
      {
        path: "/profile/update",
        element: <ProfileUpdatePage />,
      },
      {
        path: "/create/post",
        element: <CreatePostPage />,
      },
      {
        path: "/saved",
        element: <SavedPost />,
        loader: profilePageLoader as LoaderFunction,
      },
    ],
  },
];
const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
