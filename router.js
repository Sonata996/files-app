import express from "express";
import controllers from "./controlers.js";
import { validateData } from "./middlewares/validateBody.js";
import { checkExtention } from "./middlewares/checkextention.js";
const router = express.Router();

router.post("/", validateData, checkExtention, controllers.createFile);

export default router;
