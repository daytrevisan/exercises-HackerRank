function getMinOperations(change, arr) {

    let operations = 0;

    // Função auxiliar para decrementar elementos do array
    function decrement(index) {
        if (arr[index] > 0) {
            arr[index]--;
        } else {
            arr[index] = null;
        }
    }

    // Realiza as operações
    for(let i = 0; i < change.length; i++) {

        if(change[i] > 0) {

            if(arr[change[i] - 1] === 0) {
                arr[change[i - 1] = null]
            } else {
                decrement(change[i] - 1);
            }

        } else {
            decrement(i);
        }
        operations++
    }

    // Verifica se todos os elementos são null
    if(arr.every(element => element === null)) {
        return operations;
    } else {
        return -1;
    }

}

const n = 10;
const m = 3;
const change = [1, 0, 1, 3, 2, 1, 0, 3, 1, 1];
const arr = [2, 1, 2];

const result = getMinOperations(change, arr);
console.log(result)