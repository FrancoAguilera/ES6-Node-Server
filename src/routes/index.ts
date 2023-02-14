import { Router } from "express";

const router = Router();

import homeRoutes from "./home";
import usersRoutes from "./users";
import errorRoutes from "./errors";

router.use("/", homeRoutes);
router.use("/users", usersRoutes);

// catch 404 and forward to error handler
router.use(errorRoutes);

export default router;
