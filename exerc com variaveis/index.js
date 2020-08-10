let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A
const varAA = varA ; //A

varA = varB; // b
varB = varC; // c
varC = varAA; 

console.log(varA, varB, varC);

/**  ESTE MÉTODO TAMBEM FUNCIONA
let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);
*/

