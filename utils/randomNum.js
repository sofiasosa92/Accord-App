const randomNum = () => {
    //Random string of numbers fromm 1000 to 8999
    return ( (1000 + Math.floor(Math.random() * 8999) ).toString() )
  };
  
  module.exports = randomNum;