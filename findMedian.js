// Dado um array de tamanho n, retornar esse array ordenado e o número do meio (mediana)

function findMedian(arr) {

    arr.sort((a,b) => a-b)
    let middle = Math.floor(arr.length/2)
    return arr[middle]

}

let median = findMedian([0, 1, 2, 4, 6, 5, 3]);
console.log(median)