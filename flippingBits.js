// Leia um número decimal e percorra um array de 32 bits, trocando 1 por 0 e vice-versa
// Retornar o novo número obtido em binário já convertido em decimal 

function flippingBits (n) {
    let result = 0;
    
    // Lendo do mais para o menos 'significativo'
    for(let i=31; i>=0; i--) {
        if( Math.floor(n/(Math.pow(2,i))) == 1 ) {
            n -= Math.pow(2,i);
            var x = 0;
        } else {
            var x = 1;
        }
        
    result += (Math.pow(2,i)) * x;
    
    }
    
    return result
}

let number = [
    flippingBits(2147483647),
    flippingBits(1),
    flippingBits(0)
]
console.log(number)