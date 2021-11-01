const express = require("express");

const { isPalidrome } = require("../helperFunctions");

const palidromemRouter = express.Router();

palidromemRouter.post("/", (req, res) => {
  try {
    const { string } = req.body;
    if (!string || typeof string !== "string")
      return res.status(400).send("You need to provide a string");
    if (isPalidrome(string)) {
      return res.status(200).send(true);
    }
    return res.status(200).send(false);
  } catch {
    res.status(500).send("Server Error");
  }
});

module.exports = palidromemRouter;
