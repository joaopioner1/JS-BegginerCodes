let count = 0;

function exibirNumPrimos(limite) {
  for (let i = 1; i <= limite; i++) {
    for (let j = 1; j <= 10; j++) {
      if (i % j == 0) {
        count += 1;
<<<<<<< HEAD
        if (count <= 1) {
          console.log(i);
=======
        if (count == 1) {
          return i;
>>>>>>> a0a9254ca0a5020c0910befe00f20db24e96b87e
        }
      }
    }
  }
}

console.log(exibirNumPrimos(15));
