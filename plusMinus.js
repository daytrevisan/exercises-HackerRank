// Dado um array de inteiros, a 1a entrada representa o tamanho do array
// No array, retornar a razão de positivos, negativos e nulos em relação ao total (nesta ordem)

function plusMinus(arr) {

    let size = arr.length;
    let sumPos = 0;
    let sumNeg = 0;
    let sumZero = 0;

    for(let i = 0; i < size; i++) {
        if(arr[i] > 0) {
            sumPos++
        } else if (arr[i] < 0) {
            sumNeg++
        } else {
            sumZero++
        }
    }

    let pos = sumPos/size;
    let neg = sumNeg/size;
    let zero = sumZero/size;

    console.log(`${pos.toFixed(6)}\n${neg.toFixed(6)}\n${zero.toFixed(6)}`)
}

plusMinus([-4, 3, -9, 0, 4, 1])