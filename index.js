const express = require("express");
const fs = require("fs");
const app = express();

// Define routes and middleware here
app.use(express.json());
// API handler for /quote path
app.get("/quote", (req, res) => {
  const filePath = __dirname + "/qoutes.json";

  // Read the file
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.send({ error: "Error Loading data" });
      return;
    }

    // Parse the JSON data
    const jsonData = JSON.parse(data);
    let quotes = jsonData.quotes;

    // Get a random quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    console.log(randomQuote);
    // Use the random quote
    // res.send({ randomQuote });

    let quote = randomQuote.quote;
    let author = randomQuote.author;
    res.send({ quote: quote, author: author });

    return;
  });

  //   res.send({ message: "hi" });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
