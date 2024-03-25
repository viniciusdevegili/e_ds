const numbers = [3, 1, 2, 4, 6, 5];

const numerosPar = [];
const numerosImp = [];

for (let number of numbers) {
    if (number % 2 === 0) {
        numerosPar.push(number); 
    } else {
        numerosImp.push(number); 
    }
}

const sortedNumbers = numerosPar.concat(numerosImp);

console.log("Números Ordenados:", sortedNumbers);