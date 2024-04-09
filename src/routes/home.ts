import Router, { Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  console.log('alkjsd hflkasjdh flkajsh dflkajhsd')
  res.json({
    status: "App runningo",
    timestamp: Date.now(),
  });
});

export default router;
