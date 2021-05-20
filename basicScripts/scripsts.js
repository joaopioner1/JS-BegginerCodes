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

