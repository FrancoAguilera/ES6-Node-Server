import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

interface ResponseError extends Error {
  status?: number;
}

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  res.json({
    status: "App running",
    timestamp: Date.now(),
  });
});

app.get("/users", (req: Request, res: Response) => {
  res.json({
    status: "Users page running",
    timestamp: Date.now(),
  });
});

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send("Page not found on the server");
  next();
});

app.use((err: ResponseError, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

export default app;
