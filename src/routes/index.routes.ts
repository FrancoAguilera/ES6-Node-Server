import { Router } from "express";

const router = Router();

import homeRoutes from "./home.routes";
import usersRoutes from "./users.routes";
import errorRoutes from "./errors.routes";

router.use("/", homeRoutes);
router.use("/users", usersRoutes);

// catch 404 and forward to error handler
router.use(errorRoutes);

export default router;
