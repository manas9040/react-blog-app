/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
// eslint-disable-next-line no-unused-vars
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { AuthLayout, Login } from "./components/index.js";
import AddPost from "./pages/AddPost";
import AllPosts from "./pages/AllPosts";
import EditPost from "./pages/EditPost";
// import Login from './pages/Login.jsx'
import Signup from "./pages/Signup";

import Post from "./pages/Post";

// const router = createBrowserRouter(createRoutesFromElements(
// <Route path='/' element={<App/>}>
//   <Route path='/home' element ={<Home/>}></Route>
//   <Route path='/login' element ={<AuthLayout authentication={false}><Login/></AuthLayout>}></Route>
//   <Route path='/signup' element ={<AuthLayout authentication={false}><Signup/></AuthLayout>}></Route>
//   <Route path='/all-posts' element ={< AuthLayout authentication>{" "}<AllPosts/></AuthLayout>}></Route>
//   <Route path='/add-post' element ={<AuthLayout authentication>{""}<AddPost/></AuthLayout>}></Route>
//   <Route path='/edit-post/:slug' element ={<AuthLayout authentication>{""}<EditPost/></AuthLayout>}></Route>
//   <Route path='/post/:slug' element ={<Post/>}></Route>

// </Route>
// )
// )

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout authentication>
             {" "}
            <AllPosts />
          </AuthLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication>
            {" "}
            <AddPost />
          </AuthLayout>
        ),
      },

      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication>
             {" "}
            <EditPost />
          </AuthLayout>
        ),
      },
      {
        path: "post/:slug",
        element: <Post />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
