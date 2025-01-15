import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./component/webUsers/Register";

const ReactRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Register />}></Route>

        <Route path="*" element={<div>404 Page</div>}></Route>
      </Routes>
    </div>
  );
};

export default ReactRouter;
