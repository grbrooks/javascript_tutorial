console.clear()

function exists(value, array) {
    return array.some(e => e === value);
}
let marks = [4, 5, 7, 9, 10, 2];
console.log(exists(3, marks));
console.log(exists(10, marks))