function Palindromo(str) {
    
    //para remover os espaços e converter as strings para minusculo
    str = str.replace(/\s/g, '').toLowerCase();

    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false; 
        }
    }
    return true; 
}

const input = "amor a roma";
console.log("Saida:", Palindromo(input)); 