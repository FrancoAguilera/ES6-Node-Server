import Router, { Request, Response } from "express";

const router = Router();

router
  .get("/", (req: Request, res: Response) => {
    res.json({
      status: "get /products Running",
      timestamp: Date.now(),
    });
  })
  .get("/:id", (req: Request, res: Response) => {
    res.json({
      status: "get /products/:id Running",
      timestamp: Date.now(),
    });
  })
  .post("/", (req: Request, res: Response) => {
    res.json({
      status: "post /products Running",
      timestamp: Date.now(),
    });
  })
  .put("/:id", (req: Request, res: Response) => {
    res.json({
      status: " put /products/:id Running",
      timestamp: Date.now(),
    });
  })
  .delete("/:id", (req: Request, res: Response) => {
    res.json({
      status: "delte /products/:id Running",
      timestamp: Date.now(),
    });
  });

export default router;
