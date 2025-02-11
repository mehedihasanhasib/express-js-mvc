import HomeController from "../app/controllers/homeController.js";

const route = (app) => {
  app.get("/", (req, res) => new HomeController().index(req, res));
  app.get("/event/:id", (req, res) => new HomeController().show(req, res));
};

export default route;
