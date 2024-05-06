/*
Dado um array arr, nós podemos rearranjá-lo de diferentes maneiras para formar outro array, que chamaremos de array rearranjado rearranged arr. A maior grandeza possível de um array é definida como o número de índices i, onde 0 si<n, em quem rearranged_arr[i] > arr[i]. Ou seja, o elemento no array rearranjado é maior que o valor inicial do array original.

Dado um array inicial arr, encontro a maior grandeza possível que pode ser alcançada rearranjando o array original.

Exemplo
arr [1, 3, 5, 2, 1, 3, 1]
[1, 3, 5, 2, 1, 3, 1] -> array original, arr
[2, 5, 1, 3, 3, 1, 1] -> melhor

rearranjo, rearranged arr

Aqui, nos índices 0, 1,3 e 4 acima em negrito, rearranged_arr[i] > arri]. Pode-se mostrar que essa é a maior grandeza possível. Portanto, a resposta é 4,
*/

class Solution {
    maximizeGreatness(nums) {
        nums.sort((a, b) => a - b);
        let count = 0;
        for (let num of nums) {
            if (num > nums[count]) {
                count++;
            }
        }
        return count;
    }
}

// Exemplo de uso:
const solution = new Solution();
const nums = [1, 3, 5, 2, 1, 3, 11];
console.log(solution.maximizeGreatness(nums)); // Saída: 4