const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

let users = [
  { id: 1, name: "철수" },
  { id: 2, name: "영희" },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = Date.now();
  users.push(newUser);
  res.json(newUser);
});

app.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  users = users.filter((user) => user.id !== id);
  res.json({ message: "삭제 완료" });
});

app.listen(port, () => {
  console.log(`서버 실행 중: http://localhost:${port}`);
});
