/******************************** CONSTANTS *********************************/
const applePieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "apples", cost: 6.00, quantity: 7 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const pumpkinPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "pumpkin", cost: 3.75, quantity: 2 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const cherryPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "cherries", cost: 12.00, quantity: 10 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const recipes = {
  applePie: applePieRecipe,
  pumpkinPie: pumpkinPieRecipe,
  cherryPie: cherryPieRecipe
};
/* DO NOT CHANGE THE CODE ABOVE */

/*************************** FUNCTION TO REFACTOR ****************************/

/**
 * Given a pie type, return the recipe for that pie.
 */
const getRecipe = pieType => recipes[pieType];

/**
 * "Bake the number of pies specified by the pieQuantity, and print the ingredients for each ingredient
 * in the recipe."
 *
 * The function is called with the following arguments:
 *
 * bakePies('apple', 3, [
 *   { name: 'flour', quantity: '2 cups' },
 *   { name: 'sugar', quantity: '1 cup' },
 *   { name: 'apples', quantity: '6' }
 * ]);
 *
 * Args:
 *   pieType: The type of pie to bake.
 *   pieQuantity: The number of pies to bake
 *   recipe: An array of objects that contain the name of the ingredient and the amount of that
 * ingredient needed.
 */
const bakePies = (pieType, pieQuantity, recipe) => {
  // Bake the number of pies specified by the pieQuantity
  for (let i = 0; i < pieQuantity; i++) {
    // Print the ingredients for each ingredient in the recipe
    let combiningMsg = `Combining ingredients for ${pieType}: `
    combiningMsg += recipe.map(ingredient => ingredient.name).join(', ');
    console.log(combiningMsg);

    // Print the nth pie that was baked
    console.log(`Baked pie ${i + 1}!`);
  }
}

/**
 * The function takes in a recipe and a pie quantity, and returns the cost of the pie
 *
 * Args:
 *   recipe: an array of objects, each object representing an ingredient
 *   pieQuantity: The number of pies you want to make
 *
 * Returns:
 *   The cost of the pie
 */
const calculateCost = (recipe, pieQuantity) => {
  // Print the cost of each pie based on the cost of each ingredient
  const costOfPie = recipe.reduce((prev, current) => {
    return prev + current.cost;
  }, recipe[0].cost);
  console.log(`Cost per pie: ${costOfPie}`);
  return costOfPie * pieQuantity;
}

/**
 * "Prints a message to the console that includes the number of pies sold and the revenue generated
 * from the sale of those pies."
 *
 * The function takes three parameters:
 *
 * totalCost: The total cost of the pies.
 * profitMargin: The profit margin for the pies.
 * pieQuantity: The number of pies sold.
 * The function prints a message to the console that includes the number of pies sold and the revenue
 * generated from the sale of those pies
 *
 * Args:
 *   totalCost: The total cost of the pies.
 *   profitMargin: The profit margin of the pies.
 *   pieQuantity: The number of pies sold.
 */
const printRevenue = (totalCost, profitMargin, pieQuantity) => {
  const revenue = totalCost * (profitMargin || 1.2);
  console.log(`Sold ${pieQuantity} pies for $${revenue.toFixed(2)}!`);
}

/**
 * "Given a pie quantity, profit margin, and recipe, calculate the total cost of all the pies and print
 * the total revenue."
 *
 * The function is broken down into two parts:
 *
 * 1. Calculate the total cost of all the pies
 * 2. Print the total revenue calculated using the given profitMargin
 *
 * The first part is handled by the calculateCost() function, which is called with the recipe and
 * pieQuantity. The second part is handled by the printRevenue() function, which is called with the
 * totalCost, profitMargin, and pieQuantity
 *
 * Args:
 *   pieQuantity: The number of pies you want to sell
 *   profitMargin: The percentage of profit you want to make on each pie.
 *   recipe: An object that contains the cost of each ingredient
 */
const sellPies = (pieQuantity, profitMargin, recipe) => {
  // Calculate the total cost of all the pies
  const totalCost = calculateCost(recipe, pieQuantity);

  // Print the total revenue calculated using the given profitMargin
  printRevenue(totalCost, profitMargin, pieQuantity);
}

/**
 * Bake and sell pies.
 *
 * Args:
 *   pieType: The type of pie to bake.
 *   pieQuantity: The number of pies to bake
 *   profitMargin: The amount of profit you want to make per pie.
 */
function bakeAndSellPies(pieType, pieQuantity, profitMargin) {
  // Find the recipe for the pieType specified
  const recipe = getRecipe(pieType);
  // bake the pies
  bakePies(pieType, pieQuantity, recipe);
  // sell the pies
  sellPies(pieQuantity, profitMargin, recipe);
}

/******************************* LOCAL TESTS *******************************/
// bakeAndSellPies("applePie", 5, 2.5);
// bakeAndSellPies("pumpkinPie", 2);
// bakeAndSellPies("cherryPie", 7, 1.7);

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  bakeAndSellPies
};
