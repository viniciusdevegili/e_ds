function fibonacci(n) {
    if (n === 0) {
        return []; 
    } else if (n === 1) {
        return [1]; 
    }

    let fib = [1, 1]; 

    for (let i = 2; i < n; i++) {
        let nextFib = fib[i - 1] + fib[i - 2]; 
        fib.push(nextFib); 
    }

    return fib;
}

const input = 6;
console.log("Output:", fibonacci(input)); 