var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('day-10-test.txt')
});

let counts = {
}
let inputArray = [0]
let adjacent1s = 0

function factorial(num) {
    if (num === 0) {
        return 1;
    }
    return (num * factorial(num - 1));
}

function calcCombinations(n) {
    result = 0
    for (let k = 0; k <= n; k++) {
        result += (factorial(n)) / (factorial(k) * factorial(n-k))
    }
    return result;
}

function findJolts(sortedArray, max) {
    const arrayOfArrays = []
    let currentArray = []
    console.log(sortedArray)
    sortedArray.forEach((member, index) => {
        if (index > 0) {
            const diff = member - sortedArray[index - 1]
            if (!counts[diff]) {
                counts[diff] = 0
            }
            if (diff === 1 && sortedArray[index - 1] - sortedArray[index - 2] === 1) {
                currentArray.push(sortedArray[index - 1])
            } else {
                arrayOfArrays.push(currentArray)
                currentArray = []
            }
            counts[diff]++
        }
    })
    //   console.log(sortedArray)
    console.log(counts);
    console.log(arrayOfArrays.filter(array => !!array.length));
    // console.log(counts[3] * counts[1])
    // console.log(adjacent1s)
    // console.log(calcCombinations(adjacent1s))
}

lineReader.on('line', function (line) {
    inputArray.push(Number(line))
});

lineReader.on('close', function () {
    const sortedArray = inputArray.sort((a, b) => a - b)
    sortedArray.push(Math.max(...inputArray) + 3)
    findJolts(sortedArray)
})
