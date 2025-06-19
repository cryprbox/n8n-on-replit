const express = require("express");
const { spawn } = require("child_process");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

const n8n = spawn("npx", ["n8n", "start"], {
  env: { ...process.env },
  stdio: "inherit",
});

n8n.on("exit", (code) => {
  console.log("n8n process exited with code " + code);
});

app.get("/", (req, res) => {
  res.send("n8n is running... check /");
});

app.listen(port, () => {
  console.log(`Proxy server running on port ${port}`);
});