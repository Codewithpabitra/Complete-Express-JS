import express from "express";
import { homeController } from "../controllers/homeController.js";
import { aboutController } from "../controllers/aboutController.js";

const randomRouter = express.Router();


randomRouter.get('/',homeController)
randomRouter.get('/about',aboutController)

export default randomRouter;