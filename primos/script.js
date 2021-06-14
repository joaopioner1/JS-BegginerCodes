let count = 0;

function exibirNumPrimos(limite) {
  for (let i = 1; i <= limite; i++) {
    for (let j = 1; j <= 10; j++) {
      if (i % j == 0) {
        count += 1;
        if (count == 1) {
          return i;
        }
      }
    }
  }
}

console.log(exibirNumPrimos(15));
