import Question from '../models/Question.js';
class AnswersController {
    async postAnswer(req, res) {
        try {
            const { answers } = req.body;

            if (!Array.isArray(answers) || answers.length === 0) {
                return res.status(400).json({ message: "Ответы отсутствуют или в неверном формате" });
            }

            let totalScore = 0;

            for (const answer of answers) {
                const { questionId, selectedOption } = answer;

                const question = await Question.findById(questionId);
                if (!question) continue;

                const selected = question.options.find(opt => opt.text === selectedOption);
                if (selected && typeof selected.score === 'number') {
                    totalScore += selected.score;
                }
            }

            // Подсчёт уровня выгорания
            const result = this._calculateBurnoutLevel(totalScore);

            res.status(200).json({
                totalScore,
                level: result.level,
                message: result.message
            });

        } catch (error) {
            res.status(500).json({ message: "Ошибка при обработке ответов", error });
        }
    }

    _calculateBurnoutLevel(score) {
        if (score <= 6) {
            return {
                level: "🟢 Всё под контролем",
                message: "Ты в хорошем состоянии, продолжай заботиться о себе."
            };
        } else if (score <= 14) {
            return {
                level: "🟡 Первый звоночек",
                message: "Ты немного перегружен. Устрой мини-отдых и следи за своим самочувствием."
            };
        } else if (score <= 22) {
            return {
                level: "🟠 Повышенное напряжение",
                message: "Выраженные симптомы усталости. Постарайся отдохнуть, снизить темп и пересмотреть приоритеты."
            };
        } else {
            return {
                level: "🔴 Выгорание",
                message: "Срочно остановись. Организм требует восстановления. По возможности — возьми перерыв."
            };
        }
    }
}

export default AnswersController;