import mongoose from 'mongoose';

const optionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  }
});

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  options: {
    type: [optionSchema],
    required: true
  }
});

const Question = mongoose.model('Question', questionSchema);

export default Question;