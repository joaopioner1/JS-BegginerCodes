function fizzBuzz(input) {
   if (input % 3 === 0) {
      return "fizz";
   } 
   else if (input % 2 === 0) {
      return "buzz";
   } else {
      return "It's not a number!";
   }
}

const result = fizzBuzz(true);
console.log(result);
