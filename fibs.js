function fibs(n) {
    let arr = [0, 1]

    if(n == 0) return [];
    else if(n == 1) return [0];
    else if(n == 2) return arr;
    else {
        for(let i = 2; i < n; i++) {
            const x = arr[i-2] + arr[i-1]
            arr.push(x)
        }
    }
    return arr
}

function fibsRec(n) {
    if (n == 0) return []
    if (n == 1) return [0]
    if (n == 2) return [0,1]
    if (n > 2) {
        let value = fibsRec(n-1)
        value.push(value.at(-1) + value.at(-2))
        return value
    }
}

console.log(fibs(8))
console.log(fibsRec(8))

module.exports = fibs;