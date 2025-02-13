import mysql from "mysql2";
import "dotenv/config"

console.log(process.env.DB_HOST);


export default class Database {
  constructor() {
    this.pool = mysql.createPool({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER, // Replace with your DB user
      password: process.env.DB_PASSWORD, // Replace with your DB password
      database: process.env.DB, // Replace with your DB name
      waitForConnections: true,
      connectionLimit: 0, // Maximum number of connections to allow in the pool
      queueLimit: 0, // Unlimited connection queue (can be adjusted as needed)
    });
  }

  query(sql, bindings = []) {
    return new Promise((resolve, reject) => {
      this.pool.execute(sql, bindings, function (err, res) {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
}
