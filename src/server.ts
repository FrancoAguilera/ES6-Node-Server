import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import routes from "./routes";

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", routes);

export default app;
