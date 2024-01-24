function minimumEnergy(river, initial_x, initial_y, final_x, final_y) {
    const n = river.length;
    const m = river[0].length;

    const dp = new Array(n).fill(null).map(() => new Array(m).fill(Infinity));
    dp[initial_x][initial_y] = 0;

    for (let i = initial_x; i <= final_x; i++) {
        for (let j = initial_y; j <= final_y; j++) {
            if (i > 0) {
                dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + (river[i][j] === '#' ? 1 : 0));
            }
            if (j > 0) {
                dp[i][j] = Math.min(dp[i][j], dp[i][j - 1] + (river[i][j] === '#' ? 1 : 0));
            }
        }
    }

    if (dp[final_x][final_y] === Infinity) {
        return -1; // É impossível chegar ao destino
    } else {
        return dp[final_x][final_y];
    }
}

// Exemplo de uso
const n = 4;
const m = 5;
const river = [
    '.#..',
    '.##.',
    '....',
    '.#.#',
    '.##.'
];
const initial_x = 3;
const initial_y = 0;
const final_x = 0;
const final_y = 2;

const result = minimumEnergy(river, initial_x, initial_y, final_x, final_y);
console.log(result); // Saída esperada: 4