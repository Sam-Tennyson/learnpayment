import React from "react";
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Link, Navigate, Outlet, Route, RouterProvider, Routes, } from "react-router-dom";
import Header_Navbar from "../components/core/Header_Navbar";
import PublicLayout from "../components/core/PublicLayout";
import Dashboard from "../Views/PublicView/Dashboard";
import Team from "../Views/PublicView/Team";
import { PublicRoute } from "./PublicRoute";
import RenderRoutes from "./RenderRoutes";

const GuestRoute = () => {
  return (
    <PublicLayout>
      <RenderRoutes routes={PublicRoute} />  
    </PublicLayout>
  );
};

const GuestRoute2 = () => {
  console.log(PublicRoute)
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/team" element={<Team />} />
    </Routes>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements (
    // <Route>
    <Route path="/" element={<Dashboard />} >
      <Route path="/team" element={<Team />} />
    {/* // <Route path="/" element={<Dashboard />} /> */}
    </Route>

    // <Route path={PublicRoute.map((route) => route.path)} >
      // <RenderRoutes routes={PublicRoute} />
    // </Route>
  )
);

function HomePage() {
  return <div className="page">🏠 Page</div>;
}

function NotFoundPage() {
  return <div className="page">🧐 Page</div>;
}

function ApplePage() {
  return <div className="page">🍎 Page</div>;
}

const RootRouter = () => {
  return (
    <>
      <BrowserRouter> 
          {/* <div>
        <Link to="/" className="link px-2">
          Home
        </Link>
        <Link to="/apple" className="link px-2">
          Apple
        </Link>
        <Link to="/applet" className="link px-2">
          Applet
        </Link>
        <Link to="/test" className="link px-2">
          Test
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="404" element={<NotFoundPage />} />
        <Route path="apple">
          <Route path="" element={<ApplePage />} />
          <Route path="*" element={<Navigate replace to="/apple" />} />
        </Route>
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes> */}
      <GuestRoute />
          </BrowserRouter>
      {/* <RouterProvider router={router} /> */}
    </>
  );
};

export default RootRouter;
