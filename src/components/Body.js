import React from "react";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Reports from "./Reports";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./Header";
import TechStack from "./TechStack";
import Login from "./Login";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import ViolentCrimes from "./ViolentCrimes";
import CrimesAgainstWomen from "./CrimesAgainstWomen";
import PropertyCrimes from "./PropertyCrimes";
import EconomicCrimes from "./EconomicCrimes";

const Body = () => {
  const AppLayout = () => {
    return (
      <div>
        <Header />
        <Outlet />
        <Footer />
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
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/violentcrimes",
          element: <ViolentCrimes />,
        },
        {
          path: "/caw",
          element: <CrimesAgainstWomen />,
        },
        {
          path: "/propertycrimes",
          element: <PropertyCrimes />,
        },
        {
          path: "/economiccrimes",
          element: <EconomicCrimes />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Body;
