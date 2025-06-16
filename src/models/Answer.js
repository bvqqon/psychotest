import mongoose from 'mongoose';

const answerItemSchema = new mongoose.Schema({
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required: true
    },
    selectedOption: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    }
});

const testResultSchema = new mongoose.Schema({
    answers: [answerItemSchema],
    totalScore: {
        type: Number,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const TestResult = mongoose.model('TestResult', testResultSchema);
export default TestResult;