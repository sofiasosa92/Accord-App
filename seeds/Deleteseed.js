const sequelize = require('../config/connection');
const { Question } = require('../models/Question.js');

const questions = require('./questions.json');


const createQuestions = async () => {
  await sequelize.sync({ force: false });

  await Question.bulkCreate(questions, {
    individualHooks: true,
    returning: true,
  });

  
};

createQuestions();
