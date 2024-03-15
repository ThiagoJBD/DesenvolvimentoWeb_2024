function verificarNumeroPrimo(n) {
    if (n <= 1) {
        return console.log("false");
    }
    for (let divisor = 2; divisor <= Math.sqrt(n); divisor++) {
        if (n % divisor === 0) {
            return console.log("false");
        }
    }
    return console.log("true");
}

verificarNumeroPrimo(0); //false
verificarNumeroPrimo(1); //false
verificarNumeroPrimo(2); //true
verificarNumeroPrimo(3); //true
verificarNumeroPrimo(7); //true
verificarNumeroPrimo(83); //true
verificarNumeroPrimo(100); //false
verificarNumeroPrimo(991); //true
verificarNumeroPrimo(104729); //true
verificarNumeroPrimo(14348907); //false