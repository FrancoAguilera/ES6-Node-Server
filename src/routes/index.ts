import { Router } from "express";

const router = Router();

import homeRoutes from "./home";
import usersRoutes from "./users";
import productRoutes from "./products";

router.use("/", homeRoutes);
router.use("/users", usersRoutes);
router.use("/products", productRoutes);

export default router;
