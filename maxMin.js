// Dado um array de inteiros arr e um inteiro k, crie um novo array com k elementos e calcule a diferença entre o maior e menor entre os k elementos
// Teste todos os pares e retorne aquele com a menor diferença
// Ex: arr = [1,4,7,2]
// k = 2
// arr' = [4,7] 
// diferenca = max(4,7) - min(4,7) = 7 - 4 = 3

function maxMin(k, arr) {
    
    let newArr = [];
    let max = 0;
    let min = 0;

    arr.sort((a,b) => a-b);
    
    for(let i=0; i<k; i++) {
        newArr.push(arr[i]);
    }

    max = Math.max.apply(Math, newArr);
    min = Math.min.apply(Math, newArr);

    return max - min;
}

// let k = 2
// let arr = [1,4,7,2]
// console.log(maxMin(k, arr)) // 3

// let k = 4
// let arr = [1,2,3,4,10,20,30,40,100,200]
// console.log(maxMin(k, arr)) // 3

let k = 3
let arr = [10,100,300,200,1000,20,30]
console.log(maxMin(k, arr)) // 20