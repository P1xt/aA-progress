const { or, and, not, calculateTruthTable } = require('../../utils/truthTableHelpers');

// Implement the imported helper functions from line 1
//    Read the export file for the explanation of how they work

// Example workflow for the problem directly below:
//    A    B     !A || (A && B)
//    -------------------
//    0    1      ?

//    1. !A -> 1
//    2. calculateTruthTable(0, and, 1) -> 0
//    3. calculateTruthTable(1, or, 0) -> 1
//    4. Answer: 1

/******************************************************************************/

// Update arguments to calculate and console.log returned value
// calculateTruthTable(0, and, 1); // 0
// calculateTruthTable(1, or, 0); // 1

// Compute the following truth tables:
// 
// A    B     !A || (A && B)
// --------------------
// 0    0       1
// 0    1       1
// 1    0       0
// 1    1       1
// 
console.log("A", "B", "!A || (A && B)");
console.log("---------------------------------");
console.log(0, 0, calculateTruthTable(not(0), or, calculateTruthTable(0, and, 0)));
console.log(0, 1, calculateTruthTable(not(0), or, calculateTruthTable(0, and, 1)));
console.log(1, 0, calculateTruthTable(not(1), or, calculateTruthTable(1, and, 0)));
console.log(1, 1, calculateTruthTable(not(1), or, calculateTruthTable(1, and, 1)));
console.log("---------------------------------\n");
//
// A    B     B || !A
// --------------------
// 0    0       1
// 0    1       1
// 1    0       0
// 1    1       1
// 
console.log("A", "B", "B || !A");
console.log("---------------------------------");
console.log(0, 0, calculateTruthTable(0, or, not(0)));
console.log(0, 1, calculateTruthTable(1, or, not(0)));
console.log(1, 0, calculateTruthTable(0, or, not(1)));
console.log(1, 1, calculateTruthTable(1, or, not(1)));
console.log("---------------------------------\n");

//
// A    B     !(A && !B)
// --------------------
// 0    0       1
// 0    1       1
// 1    0       0
// 1    1       1
// 
console.log("A", "B", "!(A && !B)");
console.log("---------------------------------");
console.log(0, 0, not(calculateTruthTable(0, and, not(0))));
console.log(0, 1, not(calculateTruthTable(0, and, not(1))));
console.log(1, 0, not(calculateTruthTable(1, and, not(0))));
console.log(1, 1, not(calculateTruthTable(1, and, not(1))));
console.log("---------------------------------\n");

//   
// A    B     !(A || !B)
// --------------------
// 0    0       0
// 0    1       1
// 1    0       0
// 1    1       0
// 
console.log("A", "B", "!(A || !B)");
console.log("---------------------------------");
console.log(0, 0, not(calculateTruthTable(0, or, not(0))));
console.log(0, 1, not(calculateTruthTable(0, or, not(1))));
console.log(1, 0, not(calculateTruthTable(1, or, not(0))));
console.log(1, 1, not(calculateTruthTable(1, or, not(1))));
console.log("---------------------------------\n");

//   
// A    B     A || !A
// --------------------
// 0    0       1
// 0    1       1
// 1    0       1
// 1    1       1
// 
console.log("A", "B", "A || !A");
console.log("---------------------------------");
console.log(0, 0, calculateTruthTable(0, or, not(0)));
console.log(0, 1, calculateTruthTable(0, or, not(0)));
console.log(1, 0, calculateTruthTable(1, or, not(1)));
console.log(1, 1, calculateTruthTable(1, or, not(1)));
console.log("---------------------------------\n");

//   
// A    B     B && !B
// --------------------
// 0    0       0
// 0    1       0
// 1    0       0
// 1    1       0
// 
console.log("A", "B", "B && !B");
console.log("---------------------------------");
console.log(0, 0, calculateTruthTable(0, and, not(0)));
console.log(0, 1, calculateTruthTable(1, and, not(1)));
console.log(1, 0, calculateTruthTable(1, and, not(1)));
console.log(1, 1, calculateTruthTable(1, and, not(1)));
console.log("---------------------------------\n");



//   
// A    B    C     A && B || !C
// --------------------
// 0    0    0       1
// 0    0    1       0
// 0    1    0       1
// 0    1    1       0
// 1    0    0       1
// 1    0    1       0
// 1    1    0       1
// 1    1    1       1
// 
console.log("A", "B", "C", "A && B || !C");
console.log("---------------------------------");
console.log(0, 0, 0, calculateTruthTable(calculateTruthTable(0, and, 0), or, not(0)));
console.log(0, 0, 1, calculateTruthTable(calculateTruthTable(0, and, 0), or, not(1)));
console.log(0, 1, 0, calculateTruthTable(calculateTruthTable(0, and, 1), or, not(0)));
console.log(0, 1, 1, calculateTruthTable(calculateTruthTable(0, and, 1), or, not(1)));
console.log(1, 0, 0, calculateTruthTable(calculateTruthTable(1, and, 0), or, not(0)));
console.log(1, 0, 1, calculateTruthTable(calculateTruthTable(1, and, 0), or, not(1)));
console.log(1, 1, 0, calculateTruthTable(calculateTruthTable(1, and, 1), or, not(0)));
console.log(1, 1, 1, calculateTruthTable(calculateTruthTable(1, and, 1), or, not(1)));
console.log("---------------------------------\n");

//   
// A    B    C     !A || (B && C)
// --------------------
// 0    0    0       1
// 0    0    1       1
// 0    1    0       1
// 0    1    1       1
// 1    0    0       0
// 1    0    1       0
// 1    1    0       0
// 1    1    1       1
// 
console.log("A", "B", "C", "A && B || !C");
console.log("---------------------------------");
console.log(0, 0, 0, calculateTruthTable(not(0), or, calculateTruthTable(0, and, 0)));
console.log(0, 0, 1, calculateTruthTable(not(0), or, calculateTruthTable(0, and, 1)));
console.log(0, 1, 0, calculateTruthTable(not(0), or, calculateTruthTable(1, and, 0)));
console.log(0, 1, 1, calculateTruthTable(not(0), or, calculateTruthTable(1, and, 1)));
console.log(1, 0, 0, calculateTruthTable(not(1), or, calculateTruthTable(0, and, 0)));
console.log(1, 0, 1, calculateTruthTable(not(1), or, calculateTruthTable(0, and, 1)));
console.log(1, 1, 0, calculateTruthTable(not(1), or, calculateTruthTable(1, and, 0)));
console.log(1, 1, 1, calculateTruthTable(not(1), or, calculateTruthTable(1, and, 1)));
console.log("---------------------------------\n");