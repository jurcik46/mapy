import express from "express";
import  csvParser from "csv-parser";
import fs from "fs";
import https from "https";
import iconv from "iconv-lite"

import { default as path, dirname } from "path";

import { staticFolderPath, APP_ROUTE_PREFIX } from "../../configs/app.config.mjs";



const router = express.Router();

//** Project path: "/api/main/*" */
// router.use("/main", mainControler.expo);


//** POST: "/api/" */
router.get("/", function (req, res, next) {
  let results = [];

  fs.createReadStream(`${staticFolderPath}/orders.csv`)
  .pipe(iconv.decodeStream('win1250'))
  .pipe(csvParser({ separator: ';' }))
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
    res.render('../src/views/main', { data: results});
  });

});


//** POST: "/api/" */
router.get("/refresh", async function (req, res, next) {
  let results = [];

  const file = fs.createWriteStream(`${staticFolderPath}/orders.csv`);
  const request = await https.get("https://www.max-i.cz/export/orders.csv?patternId=41&hash=327419915a8b934baa161562f881ef3958509271e981a009c5128e0154523315", function(response) {
   response.pipe(file);
   res.redirect('/');
  });

  // fs.createReadStream('/home/jano/dev/mapa/public/orders.csv', { encoding: 'binary' })
  // .pipe(csvParser({ separator: ';' }))
  // .on('data', (data) => results.push(data))
  // .on('end', () => {
  //   res.render('../src/views/main', { data: results});
  // });

});


//** POST: "/api/" */
// router.get("/", function (req, res, next) {
//   let { title } = req.body;
//   title = "sadasda";
//     console.log(title);
//   res.json({
//     title: `${title}`
//   });
// });

export default router;
