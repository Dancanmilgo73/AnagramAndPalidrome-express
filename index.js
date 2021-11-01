const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

const palidromeRouter = require("./routes/palidromeRouter");
const anagramRouter = require("./routes/anagramRouter");

app.use("/palidrome", palidromeRouter);
app.use("/anagram", anagramRouter);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
