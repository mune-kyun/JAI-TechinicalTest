const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

const routes = require("./routes");

app.use(cors());
app.use(express.json());

app.use("/api", routes);
app.get("/", (req, res) => {
  res.send("BE");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
