import Database from "../core/Database.js";

export default class HomeController {
  async index(req, res) {
    const db = new Database();
    const result = await db.query("SELECT * FROM events");
    res.json(result);
  }

  async show(req, res) {
    const db = new Database();
    const params = req.params;
    try {
      const result = await db.query("SELECT * FROMss events WHERE id = ?", [
        params.id,
      ]);
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  }
}
