
exbirAsteriscos(10);

function exbirAsteriscos(lines) {
    for (let i = 1; i <= lines; i++) {
      let quant = '';
      for (let j = 0; j < lines; j++) {
          quant += '*';
      }
      console.log(quant);
    } 
}    


