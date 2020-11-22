import express from "express";
import  csvParser from "csv-parser";
import fs from "fs";
import path from "path";
import { ConsoleTransportOptions } from "winston/lib/winston/transports";


const router = express.Router();

const results = [];
//** Project path: "/api/main/*" */
// router.use("/main", mainControler.expo);


//** POST: "/api/" */
router.get("/", function (req, res, next) {
  // return res.json({
  //       title: `${title}`
  //     });
  // console.log(path.resolve('orders.csv'))
  // ['zeme','psc','mesto','ulice','objednavka']
  fs.createReadStream('/home/jano/dev/mapa/public/orders.csv', 'utf8')
  .pipe(csvParser({ separator: ';' }))
  .on('data', (data) => results.push(data))
  .on('end', () => {
    
      console.log(results);
      res.render('../src/views/main', { data: results});

      // [
      //   { NAME: 'Daffy Duck', AGE: '24' },
      //   { NAME: 'Bugs Bunny', AGE: '22' }
      // ]
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
