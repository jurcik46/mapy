import { default as path, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const staticFolderPath = path.join(__dirname, "public");
export const APP_ROUTE_PREFIX = process.env.APP_ROUTE_PREFIX;
export const PASSWORD_SALT_FACTOR = process.env.PASSWORD_SALT_FACTOR;
export const JWT_SECRET = process.env.JWT_SECRET_KEY;

const API_LINK = process.env.APP_LINK

export const constantPath = {
    approveRegistration: `${API_LINK}${APP_ROUTE_PREFIX}/entrance/registration/accept/`,
    resetPassword: `${API_LINK}${APP_ROUTE_PREFIX}/entrance/registration/accept/`,
}

