import express from "express";
import morgan from "morgan";
import router from "./router.js";

const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use("/files", router);

app.listen(3000, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("good");
  }
});
