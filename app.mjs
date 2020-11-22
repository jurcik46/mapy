import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import loggerMorgan from 'morgan';
import logger from './src/helpers/logger.helper.mjs';
import rootRouter from './src/routes/root.route.mjs';
import {
	errorHandler,
	notFoundHandler
} from "./src/middlewares/errorHandler.middleware.mjs";
import { corsOption } from "./configs/security.config.mjs";
import errorHandlerDev from "errorhandler";
import { LOG_OUTPUT } from "./configs/logger.config.mjs";
import { staticFolderPath, APP_ROUTE_PREFIX } from "./configs/app.config.mjs";
const app = express();



// set the view engine to ejs
app.set('view engine', 'ejs');

//** CORS security */
app.use(cors(corsOption));

//** Logger */
app.use(loggerMorgan(LOG_OUTPUT, { stream: logger.stream }));

//** JSON Body Parser */
app.use(express.json());

//** URL payloud Parser */
app.use(
	express.urlencoded({
		extended: true
	})
);

//** Cookie Parser */
app.use(cookieParser());

//** Static folder  */
console.log(staticFolderPath);
app.use(express.static(staticFolderPath));


//** Root router implementation */
app.use(rootRouter);
//** catch 404 and throw error*/
app.use(notFoundHandler);

//** Error handler middlewares  */
if (process.env.APP_MODE === 'development') {
	// app.use(errorHandlerDev());
}
app.use(errorHandler);

export default app;
