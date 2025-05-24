const express = require("express");
const QuestionController = require("./controllers/QuestionController");
const errorHandler = require("./middlewares/errorHandler");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "Quiz API" });
});
app.get("/questions", QuestionController.getAllQuestion);
app.get("/questions/:questionId", QuestionController.getAllQuestion);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
