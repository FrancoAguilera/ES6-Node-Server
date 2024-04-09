import { Router } from "express";
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from "swagger-jsdoc";

import { options } from "../swaggerOptions";

const specs = swaggerJSDoc(options)

const router = Router();

/**
 * @openapi
 * '/':
 *  get:
 *     tags:
 *     - Home Controller
 *     summary: Get app status
 *     responses:
 *      200:
 *        description: Fetched Successfully
 *      500:
 *        description: Server Error
 */

/**
 * @openapi
 * '/users':
 *  get:
 *     tags:
 *     - Users Controller
 *     summary: Get full list of saved users
 *     responses:
 *      200:
 *        description: Fetched Successfully
 *      500:
 *        description: Server Error
 */
import homeRoutes from "./home";
import usersRoutes from "./users";
import errorRoutes from "./errors";

router.use("/", homeRoutes);
router.use("/users", usersRoutes);
router.use("/docs", swaggerUI.serve, swaggerUI.setup(specs))

// catch 404 and forward to error handler
router.use(errorRoutes);

export default router;
