import express from "express";
import  csvParser from "csv-parser";
import fs from "fs";
import path from "path";


const router = express.Router();

//** Project path: "/api/main/*" */
// router.use("/main", mainControler.expo);


//** POST: "/api/" */
router.get("/", function (req, res, next) {
  let results = [];

  // return res.json({
  //       title: `${title}`
  //     });
  // console.log(path.resolve('orders.csv'))
  // ['zeme','psc','mesto','ulice','objednavka']
  fs.createReadStream('/home/jano/dev/mapa/public/orders.csv', { encoding: 'binary' })
  .pipe(csvParser({ separator: ';' }))
  .on('data', (data) => results.push(data))
  .on('end', () => {
    res.render('../src/views/main', { data: results});
  });

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
