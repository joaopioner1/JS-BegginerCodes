function fizzBuzz(input) {
  if (input % 3 === 0 && input % 5 === 0) 
    return "FizzBuzz"
  if (input % 3 === 0) 
    return "fizz";
  if (input % 2 === 0) 
    return "buzz";
  else 
    return "It's not a number!";
}

const result = fizzBuzz(15);
console.log(result);
