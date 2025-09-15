require("dotenv").config();
// console.log("Loaded ENV:", process.env); // debug line
const express = require("express");
const cors = require("cors");
const DbConnect = require("./DB/DbConnect");
const { router } = require("./Router/movie.router");

const app = express();
const port = process.env.PORT || 8090;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/movie", router);

app.get("/", (req, res) => {
  res.send("🎬 Welcome To Movie Projects API 🚀");
});

app.listen(port, async () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
  await DbConnect();
});
