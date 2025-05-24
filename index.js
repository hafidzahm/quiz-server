if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const QuestionController = require("./controllers/QuestionController");
const errorHandler = require("./middlewares/errorHandler");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "Quiz API" });
});
app.get("/questions", QuestionController.getAllQuestion);
app.get("/questions/:questionId", QuestionController.getQuestionById);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
