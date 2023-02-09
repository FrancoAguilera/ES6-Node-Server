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

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  const err: ResponseError = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err: ResponseError, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err,
  });
  next(err);
});

app.get("/", (req: Request, res: Response) => {
  res.json({
    status: "App running",
    timestamp: Date.now(),
  });
});

export default app;
