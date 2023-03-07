function firstStep(input) {
  return input.split("&");
}

function secondStep(input) {
  return input.map(next => next.split("="));
}

function thirdStep(input) {
  return input.map(next => [next[0], next[1].replace("+", " ")]);
}

function fourthStep(input) {
  return input.map(next => [next[0], decodeURIComponent(next[1])]);
}

function fifthStep(input) {
  const result = {};
  input.forEach(next => result[next[0]] = next[1]);
  return result;
}

function parseBody(str) {
  return fifthStep(fourthStep(thirdStep(secondStep(firstStep(str)))));
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};