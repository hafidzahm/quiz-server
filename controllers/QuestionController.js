const { Quiz } = require("../models");
class QuestionController {
  static async getAllQuestion(req, res, next) {
    try {
      const quizzes = await Quiz.findAll();
      return res.status(200).json({ quizzes });
    } catch (error) {
      throw error;
    }
  }

  static async getQuestionById(req, res, next) {
    try {
      const { questionId } = req.params;
      const quiz = await Quiz.findByPk(+questionId);
      console.log(quiz);
      if (!quiz) {
        throw { name: "Not Found", message: "Quiz not found" };
      }
      return res.status(200).json({ quiz });
    } catch (error) {
      throw error;
    }
  }
}
module.exports = QuestionController;
