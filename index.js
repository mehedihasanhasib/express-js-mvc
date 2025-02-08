import express from "express";
import route from "./routes/web.js"; // Ensure the `.js` extension is present

const app = express();

route(app);

app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
