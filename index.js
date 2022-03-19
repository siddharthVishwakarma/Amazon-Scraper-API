const express = require("express");
const request = require("request-promise");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Amazon Scraper API");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
