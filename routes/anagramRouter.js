const express = require("express");

const { isAnagram } = require("../helperFunctions");

const anagramRouter = express.Router();

anagramRouter.post("/", (req, res) => {
  try {
    const { word1, word2 } = req.body;
    if (!word1 || !word2)
      return res.status(400).send("You need to provide word1 and word2");

    if (isAnagram(word1, word2)) {
      return res.status(200).send(true);
    }
    return res.status(200).send(false);
  } catch {
    res.status(500).send("server Error");
  }
});

module.exports = anagramRouter;
