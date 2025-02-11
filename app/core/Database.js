import mysql from "mysql2";

export default class Database {
  constructor() {
    this.pool = mysql.createPool({
      host: "localhost",
      user: "root", // Replace with your DB user
      password: "", // Replace with your DB password
      database: "event-management", // Replace with your DB name
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
