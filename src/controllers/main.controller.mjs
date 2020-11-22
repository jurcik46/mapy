import createError from "http-errors";




import log from "../../helpers/logger.helper.mjs";

const entranceLog = { label: "ENTRACE" };


export const test = async (req, res, next) => {
    try {


        return res.status(201).json({ "data": "fuznguje to kokot " });
    } catch (error) {
        log.error({
            ...entranceLog,
            message: `User creating failed`,
            error
        });
        return next(createError(500, `User creating failed `));
    }
};