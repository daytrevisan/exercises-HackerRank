// Dado uma matriz quadrada, calcule a diferença entre a soma de suas diagonais

function diagonalDifference(arr) {
    let sumPrimaryDiagonal = 0;
    let sumSecondaryDiagonal = 0;
    let size = arr.length;
    console.log(size);

    for(let i = 0; i < size; i++) {
        sumPrimaryDiagonal += arr[i][i]
        sumSecondaryDiagonal += arr[i][size-1-i]
    }

    console.log(sumSecondaryDiagonal)
    let difference = Math.abs(sumPrimaryDiagonal - sumSecondaryDiagonal);

    return difference

}

// let matrix = [[11,2,4], [4,5,6], [10,8,-12]] // 15
let matrix = [[11,2], [4,5]] // 10

console.log(diagonalDifference(matrix))

// 11 2 4
// 4 5 6
// 10 8 -12

// Primary Diagonal -> i=j
// Seconday Diagonal -> i+j=4

/* Outra forma

function diagonalDifference(arr) {
    let size = arr.length;
    let principal = 0;
    let secundaria = 0;
    //console.log(arr.length);
    
    for(let i=0; i<size; i++) {
        for(let j=0; j<size; j++) {
            if(i == j) {
                principal+=arr[i][j];
            }
            if(i+j == size-1) {
                secundaria+=arr[i][j];
            }
        }
    }
    
    let resultado = Math.abs(principal - secundaria);
    return resultado;

}

*/