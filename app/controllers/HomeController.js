import Database from "../core/Database.js";

export default class HomeController {
  async index(req, res) {
    try {
      const db = new Database();
      const result = await db.query("SELECT * FROM events");
      res.json(result);
    } catch (error) {
      res.send(error);
    }
  }
}
