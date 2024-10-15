import Router, { Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({
    status: "App running",
    timestamp: Date.now(),
  });
});

export default router;
