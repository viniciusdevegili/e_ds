function acharUnicoNumero(arr) {
    let resultado = 0;

    for (let i = 0; i < 32; i++) {
        let sum = 0;

        for (let j = 0; j < arr.length; j++) {
            if ((arr[j] & (1 << i)) !== 0) {
                sum++;
            }
        }

        if (sum % 3 !== 0) {
            resultado |= (1 << i);
        }
    }

    return resultado;
}

const input = [5, 3, 4, 3, 5, 5, 3];
console.log("Saida:", acharUnicoNumero(input));