import mysql from "mysql2";

export default class Database {
  constructor() {
    this.connection = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "",
      database: "event-management",
    });
  }

  query(sql, bindings = []) {
    return new Promise((resolve, reject) => {
      this.connection.execute(sql, bindings, function (err, rows) {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
}
