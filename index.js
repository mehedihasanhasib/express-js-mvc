import express from "express";
import route from "./routes/web.js";

const app = express();

route(app);

app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

app.listen(3000, () => {
  console.log("Server is running on 3000 port");
});
