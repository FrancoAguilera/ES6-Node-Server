import Router, { Request, Response } from "express";
import { getUsers, getUser, createUser, updateUser, deleteUser } from "../controllers/users.controller";

const router = Router();

router
  .get("/", getUsers)
  .get("/:_id", getUser)
  .post("/", createUser)
  .put("/:_id", updateUser)
  .delete("/:_id", deleteUser);

export default router;
