function sum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

function difference(a, b) {
    return a - b;
}

function product(a, b) {
    return a * b;
}

function average(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total / numbers.length;
}

console.log(sum([1, 2, 3])); // 6
console.log(difference(5, 3)); // 2
console.log(product(4, 2)); // 8
console.log(average([10, 20])); // 15