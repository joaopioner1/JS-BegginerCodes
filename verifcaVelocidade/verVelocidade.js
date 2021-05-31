function verificaVelocidade(velocidade) {
    let aux;
    if (velocidade <= 70) {
        return "OK";
    } else {
        aux = Math.floor((velocidade - 70) / 5);
    } 
    if (aux >= 12) {
        return "Carteira suspensa!";
    }
    return "Pontos: " + aux;
}
console.log(verificaVelocidade(75));