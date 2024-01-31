import React from "react";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Reports from "./Reports";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./Header";

const Body = () => {
  const AppLayout = () => {
    return (
      <div>
        <Header />
        <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/", // Root path for Home
          element: <Home />,
        },
        {
          path: "/aboutUs",
          element: <AboutUs />,
        },
        {
          path: "/reports",
          element: <Reports />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Body;
