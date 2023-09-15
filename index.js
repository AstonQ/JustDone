import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const taskList = [];
const taskListWork = [];

var year = app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", { newTask: taskList });
});

app.get("/work", (req, res) => {
  res.render("work.ejs", { newTaskWork: taskListWork });
});

app.post("/", (req, res) => {
  const addTask = req.body["addTask"];
  taskList.push(addTask);
  res.render("index.ejs", { newTask: taskList });
});

app.post("/work", (req, res) => {
  const addTaskWork = req.body["addTaskWork"];
  taskListWork.push(addTaskWork);
  res.render("work.ejs", { newTaskWork: taskListWork });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
