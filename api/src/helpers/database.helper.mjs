import mysql from "mysql";
import util from "util";
import {  
    dbHost,
    dbName,
    dbuser,
    dbPassword,
    } from "../../configs/database.config.mjs"

const db = mysql.createConnection({
    connectionLimit: 10,
    host: dbHost,
    user: dbuser,
    password: dbPassword,
    database: dbName
})


// Ping database to check for common exception errors.
// db.getConnection = (err, connection) => {
//     if (err) {
//       if (err.code === 'PROTOCOL_CONNECTION_LOST') {
//         console.error('Database connection was closed.')
//       }
//       if (err.code === 'ER_CON_COUNT_ERROR') {
//         console.error('Database has too many connections.')
//       }
//       if (err.code === 'ECONNREFUSED') {
//         console.error('Database connection was refused.')
//       }
//     }
  
//     if (connection) connection.release()
//     console.log("Database connection was succefulle");
//     return
//   }
db.query = util.promisify(db.query)

db.testConnection= async ()=>{
    db.connect();

    await db.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
      if (error) throw error;
      console.log('Database connection was succefulle ', results[0].solution);
    });
    db.end();
}


  // Promisify for Node.js async/await.

  export default db;
  