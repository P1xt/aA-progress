const pick = (n1, n2, operation, callback) => {
  return callback(operation(n1, n2));
}
function multiplyBiggerNumByTwo(num1, num2) {
  return pick(num1, num2, Math.max, (input) => input * 2);
}

function divideBiggerNumByThree(num1, num2) {
  return pick(num1, num2, Math.max, (input) => input  / 3);
}

function eatMostTacos(sum1, sum2) {
  return pick(sum1, sum2, Math.max, (input) => `I ate ${input} tacos.`);
}

function adoptSmallerDog(weight1, weight2) {
  return pick(weight1, weight2, Math.min,  
    (input) => `I adopted a dog that weighs ${input} pounds.`);
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};