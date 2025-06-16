class QuestionsController {
    constructor(QuestionModel) {
        this.QuestionModel = QuestionModel;
    }

    async getQuestions(req, res) {
        try {
            const questions = await this.QuestionModel.find();
            res.status(200).json(questions);
        } catch (error) {
            res.status(500).json({ message: 'Ошибка при получении вопросов', error });
        }
    }

    async addQuestion(req, res) {
        try {
            const { text, options } = req.body;

            if (!text || !Array.isArray(options) || options.length === 0) {
                return res.status(400).json({ message: 'Некорректный формат вопроса или опций' });
            }

            for (const opt of options) {
                if (!opt.text || typeof opt.score !== 'number') {
                    return res.status(400).json({ message: 'Каждая опция должна иметь text и score' });
                }
            }

            const newQuestion = new this.QuestionModel({ text, options });
            await newQuestion.save();

            res.status(201).json({ message: 'Вопрос успешно добавлен', question: newQuestion });
        } catch (error) {
            res.status(400).json({ message: 'Ошибка при добавлении вопроса', error });
        }
    }
}

export default QuestionsController;