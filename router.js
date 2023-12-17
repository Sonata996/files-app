import express from "express";
import controllers from "./controllers.js";
import { validateData } from "./middlewares/validateBody.js";
import { checkExtention } from "./middlewares/checkExtention.js";
const router = express.Router();

router.post("/", validateData, checkExtention, controllers.createFile);

router.get('/', controllers.getFiles);

router.get('/:fileName', controllers.getFileInfo);

export default router;
