import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  Signup,
  Login,
  Dashboard,
  AdminLayout,
  Layout,
  Protected,
  View,
  Customer,
  Profile,
  Employee,
  Sales,
  Report,
} from "./component/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Protected authentication={false}>
            <Home />
          </Protected>
        ),
      },
      {
        path: "/signup",
        element: (
          <Protected authentication={false}>
            <Signup />
          </Protected>
        ),
      },
      {
        path: "/login",
        element: (
          <Protected authentication={false}>
            <Login />
          </Protected>
        ),
      },
      {
        path: "/profile",
        element: (
          <Protected authentication={true}>
            <Profile />
          </Protected>
        ),
      },
      {
        path: "/view",
        element: (
          <Protected authentication={true}>
            <View />
          </Protected>
        ),
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <Protected authentication={true} role="admin">
        <AdminLayout />
      </Protected>
    ),
    children: [
      {
        index: true,
        element: (
          <Protected authentication={true} role="admin">
            <Dashboard />
          </Protected>
        ),
      },
      {
        path: "employee",
        element: (
          <Protected authentication={true} role="admin">
            <Employee />
          </Protected>
        ),
      },
      {
        path: "customer",
        element: (
          <Protected authentication={true} role="admin">
            <Customer />
          </Protected>
        ),
      },
      {
        path: "sales",
        element: (
          <Protected authentication={true} role="admin">
            <Sales />
          </Protected>
        ),
      },
      {
        path: "report",
        element: (
          <Protected authentication={true} role="admin">
            <Report />
          </Protected>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <div className="w-full">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
