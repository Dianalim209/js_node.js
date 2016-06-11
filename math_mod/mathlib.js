module.exports = function() {
  return {
    add: function(num1, num2){
      console.log("The sum is:", num1 + num2);
      // returns two numbers added together
    },
    multiply: function(num1, num2){
      console.log("The sum is:", num1 * num2);
      // returns two numbers multiplied by one another
    },
    square: function(num){
      console.log("The sum is:", num * num)
      // returns the number squared
    },
    random: function(num1, num2){
      var random = Math.floor(Math.random() * (num2 - num1 + 1) + num1);
      console.log('random:', random);
      // returns a random number betwen two numbers
    }
  }
};
