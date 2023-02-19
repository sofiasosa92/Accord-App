//const sequelize = require('../config/connection');
const User = require('./User');
const Answer = require('./Answer');
//const Question = require('./Question');

// const questions = require('../seeds/questions.json');
// (async () => {
//     await sequelize.sync({ force: false });
  
//     await Question.bulkCreate(questions, {
//       individualHooks: true,
//       returning: true,
//     });
  
    
//   })();
  

module.exports = { User, Answer };
