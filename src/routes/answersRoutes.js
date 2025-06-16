import express from 'express';
import AnswersController from '../controllers/answersController.js';

const router = express.Router();
const answersController = new AnswersController();

/**
 * @swagger
 * /api/answer:
 *   post:
 *     summary: Отправить ответы пользователя
 *     description: Принимает объект с ответами на тест и возвращает результат уровня выгорания
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               answers:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     questionId:
 *                       type: string
 *                       description: ID вопроса
 *                     selectedOption:
 *                       type: string
 *                       description: Выбранный вариант ответа
 *     responses:
 *       200:
 *         description: Результат успешно получен
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalScore:
 *                   type: number
 *                   description: Общий балл пользователя
 *                 burnoutLevel:
 *                   type: string
 *                   description: Уровень выгорания
 *                 message:
 *                   type: string
 *                   description: Рекомендация для пользователя
 *       400:
 *         description: Неверный формат запроса
 */
router.post('/answer', (req, res) => answersController.postAnswer(req, res));

export default router;