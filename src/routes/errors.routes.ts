import Router, { Request, Response, NextFunction } from "express";

const router = Router();

interface ResponseError extends Error {
  status?: number;
}

// catch 404
router.use((req: Request, res: Response, next: NextFunction) => {
  const err: ResponseError = new Error("Not Found");
  err.status = 404;
  next(err);
});

// catch 500
router.use((err: ResponseError, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err,
    timestamp: Date.now(),
  });
  next(err);
});

export default router;
