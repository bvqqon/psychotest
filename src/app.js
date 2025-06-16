import express from 'express';
import dotenv from 'dotenv';
import { swaggerUi, specs } from './swagger.js';
import questionsRoutes from './routes/questionsRoutes.js';
import answersRoutes from './routes/answersRoutes.js';
import connectDB from './utils/db.js';

dotenv.config();

const app = express();
app.use(express.json());

// 🚀 Главная проверка
app.get('/', (req, res) => {
  res.send('🎯 PsychoTest API is up and running');
});

// Подключение маршрутов
app.use('/api', questionsRoutes);
app.use('/api', answersRoutes);

// Подключение Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Подключение к MongoDB
connectDB();

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});