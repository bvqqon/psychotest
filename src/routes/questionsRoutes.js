const router = express.Router();
import express from 'express';
import QuestionsController from '../controllers/questionsController.js';
import Question from '../models/Question.js';

const questionsController = new QuestionsController(Question);

/**
 * @swagger
 * /api/questions:
 *   get:
 *     summary: Получить все вопросы
 *     description: Возвращает список всех вопросов для психо-теста
 *     responses:
 *       200:
 *         description: Успешный ответ
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   text:
 *                     type: string
 *                   options:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         text:
 *                           type: string
 *                         score:
 *                           type: number
 *   post:
 *     summary: Добавить новый вопрос
 *     description: Добавляет новый вопрос в базу данных
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *               options:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     text:
 *                       type: string
 *                     score:
 *                       type: number
 *     responses:
 *       201:
 *         description: Вопрос успешно добавлен
 *       400:
 *         description: Неверный формат запроса
 */
router.get('/questions', (req, res) => questionsController.getQuestions(req, res));
router.post('/questions', (req, res) => questionsController.addQuestion(req, res));

export default router;