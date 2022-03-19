const express = require("express");
const request = require("request-promise");

const app = express();

const PORT = process.env.PORT || 5000;

const apiKey = "08c76fdd1f07e2ae7cb92e7033b508fa";

const baseURL = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Amazon Scraper API");
});

// Ger Product details
app.get("/products/:productId", async (req, res) => {
  const { productId } = req.params;
  try {
    const response = await request(
      `${baseURL}&url=https://www.amazon.in/dp/${productId}`
    );
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
