// Dado um array de inteiros, retornar o único elemento que não estiver duplicado

function lonelyInteger(arr) {
  let number;

  arr.forEach((element) => {
    number ^= element
  });

  // Utilizado a operação lógica XOR (OU exclusivo => true para APENAS UM)

    return number
}

let arr = [1,2,3,4,3,2,1];
console.log(lonelyInteger(arr))