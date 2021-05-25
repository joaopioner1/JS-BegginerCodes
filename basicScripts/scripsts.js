let hello = "hello world!";
console.log(hello);

let pessoa = {
  nome: "Joao Pioner",
  idade: 16,
  escola: "IFRS",
  estudante: true
};

let ages = [1, 23, 45, 78];
console.log(ages[0]);

function changeNumber() {
  ages[0] = "Carlos";
};
console.log(ages[0]);
changeNumber();
console.log(ages[0]);

let age = 3;
function changeAge(nAge) {
    age = nAge;
}
console.log(age);
changeAge(6);
console.log(age);

function calcPercentage(numb, perctg) {
    return perctg * numb / 100;
};
let result = calcPercentage(1000, 1);
console.log(result);

let names = ['Joao', 'Isa', 'Adriana', 'Maria'];

let grades = [10, 5, 12];

console.log('Name: ' + names[0]);
console.log('Grade: ' + grades[0]);

let name1 = 'MARCOS';
let name2 = 'MARCOS';

if (name1 === name2) {
  console.log("EQUAL!");
} else {
  console.log("Not equal!");
}

//OPERADOR TERNÁRIO
let points = 200;
let type = points > 100 ? 'premium' : 'common';
console.log(type);

function largestNumber(n1, n2) {
  if (n1 > n2) {
    return "The largest number is: " + n1;
  } else {
    return "The largest number is: " + n2;
  }
}
console.log(largestNumber(1.15, 1.2));

