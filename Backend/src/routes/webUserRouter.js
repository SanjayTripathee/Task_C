import { Router } from "express";
import { createWebUserController } from "../controller/webUserController.js";

let webUserRouter = Router();
webUserRouter.route("/").post(createWebUserController);


export default webUserRouter;
