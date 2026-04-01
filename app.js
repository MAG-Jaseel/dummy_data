const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 6004;

app.get("/", (req, res) => {
  res.send(getUsers(`2026-03-25T10:38:13.000Z`, `2026-03-25T13:00:20.000Z`));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
