import React from "react";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Reports from "./Reports";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./Header";
import TechStack from "./TechStack";
import Login from "./Login";

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
        {
          path: "/techstack",
          element: <TechStack />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Body;
