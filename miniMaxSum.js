// Dado um array com 5 números, apresentar a soma dos 4 primeiros como soma mínima e dos 4 últimos como soma máxima

// Solução com método Sort()

function miniMaxSum(arr) {

    let sumMin = 0;
    let sumMax = 0;

    arr.sort((a,b)=>a-b);

    for(let i=0; i<arr.length-1; i++) {
        sumMin+=arr[i];
    }

    for(let j=1; j<arr.length; j++) {
        sumMax+=arr[j];
    }

    return `${sumMin} ${sumMax}`
    
}

console.log(miniMaxSum([3, 5, 4, 1, 2]))

// Solução alternativa

// let min = arr[0];
// let max = arr[0];
// let sum = 0;

// for(let i = 0; i < 5; i++) {
//     if(max < arr[i]) {
//         max = arr[i]
//     }

//     if(min > arr[i]) {
//         min = arr[i]
//     }

//     sum += arr[i]
// }

// let sumMin = sum - max;
// let sumMax = sum - min;

// console.log(`${sumMin} ${sumMax}`)