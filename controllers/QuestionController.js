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
}
module.exports = QuestionController;
