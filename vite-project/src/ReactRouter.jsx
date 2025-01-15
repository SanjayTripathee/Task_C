import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Register from "./component/webUsers/Register";


const ReactRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Register/>}>
          {/* index on a Route, it means that this route will be rendered when the parent route's path is matched exactly. */}

          <Route path="admin" element={<Outlet />}>
            <Route index element={<div>This is admin dashBoard</div>}></Route>
            <Route path="register" element={<Register />}></Route>
          </Route>
        </Route>

        <Route path="*" element={<div>404 Page</div>}></Route>
      </Routes>
    </div>
  );
};

export default ReactRouter;
