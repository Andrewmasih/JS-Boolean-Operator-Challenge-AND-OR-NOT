/* There are several DATA TYPES in JS, and one of them are boolean data type always have a value of TRUE or FALSE, 3 Boolean Operators are:
1. AND = &&
2. OR = ||
3. NOT = ! */

/* what happens if you want to check multiple 'boolean' conditions at once and verify the entire statement, all booleans combined together, resulting in TRUE or FALSE */

/* by combining these Operators and stategic sets of parenthsis around different Operands, we can evaluate any combination of events and decide which directon your code should take, based on the result either TRUE or FALSE */

/* 1/ define a varible, num1, which has a value of 5

   2/ define a varible, num2, which has a value of 10
   
   3/ define a varible, result1, which determines if both 'num1' is greater than 'num1' is greater than 'num2' and 'num2'is greater than 10
   
   4/ define a varible, result2, which determines if either num1 or num2 is greater than 5
   
   5/ define a varible, result3, which negates result2 */

   // my answer below:

   let num1 = 5;
   let num2 = 10;

   let result1 = num1 && num2 > 10;
   let result2 = num1 > 5 || num2 > 5; // originally had written down num1 || num2 > 5; but the computer dont understand we have to give instruction to each value ie. num1 > 5 num2 > 5 and not num1num2 > 5;
   let result3 = ! result2;

   console.log (result1);
   console.log (result2);
   console.log (result3);



