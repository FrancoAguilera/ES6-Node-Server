import Router, { Request, Response } from "express";

const router = Router();

router
  .get("/", (req: Request, res: Response) => {
    res.json({
      status: "get /users Running",
      timestamp: Date.now(),
    });
  })
  .get("/:id", (req: Request, res: Response) => {
    res.json({
      status: "get /users/:id Running",
      timestamp: Date.now(),
    });
  })
  .post("/", (req: Request, res: Response) => {
    res.json({
      status: "post /users Running",
      timestamp: Date.now(),
    });
  })
  .put("/:id", (req: Request, res: Response) => {
    res.json({
      status: " put /users/:id Running",
      timestamp: Date.now(),
    });
  })
  .delete("/:id", (req: Request, res: Response) => {
    res.json({
      status: "delte /users/:id Running",
      timestamp: Date.now(),
    });
  });

export default router;
