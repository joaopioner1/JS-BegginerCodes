function exibirTipo(tipo) {
  let verifica = tipo % 2 === 0 ? "Par" : "Impar";
  return verifica;
}
console.log(exibirTipo(7));