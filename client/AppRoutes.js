import React from "react";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Loading from "./src/component/fallback/Loading";
import Login from "./src/component/form/Login";
const Signup = lazy(() => import("./src/component/form/Signup"));

export default function AppRoutes() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </Suspense>
    </>
  );
}
