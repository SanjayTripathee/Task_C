import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
// import AdminRegister from "./component/webUsers/AdminRegister";

const ReactRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminRegister/>}>
          {/* index on a Route, it means that this route will be rendered when the parent route's path is matched exactly. */}

          <Route path="admin" element={<Outlet />}>
            <Route index element={<div>This is admin dashBoard</div>}></Route>
            <Route path="register" element={<AdminRegister />}></Route>
          </Route>
        </Route>

        <Route path="*" element={<div>404 Page</div>}></Route>
      </Routes>
    </div>
  );
};

export default ReactRouter;
