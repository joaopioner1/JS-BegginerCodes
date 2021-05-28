console.log("Ola godinha");

let isadora = ["Isadora", 16, "1 ano", ""];
-+
console.log(isadora[1]);

let a = 10;
let b = 5;
function soma(){
    return a+b;
}
let gordo = soma();
console.log (gordo);

let c = 5;
let d = 1;
function subtracao(){
  return c-d;
}

let nome = 'joao';

function mudaNome(){
  nome= 'isadora';
}

console.log(nome);
mudaNome();

console.log(nome);

let numero = 5;
function mudaNumero(){
  numero= 7;
};
console.log(numero);
mudaNumero();
console.log(numero);

let signoIsa = 'peixes';
let idadeIsa = 16;
function mudaDados(){
  signoIsa = 'aquario';
  idadeIsa = 17;
}
console.log(signoIsa, idadeIsa);
mudaDados();
console.log(signoIsa, idadeIsa);
let adriana = ['adriana', 44, 'casada', 'maquinense'];
console.log(adriana[3]);
function mostrarTudo(){
    console.log(adriana[0]);
    console.log(adriana[1]);
    console.log(adriana[2]);
    console.log(adriana[3]);
}
mostrarTudo();