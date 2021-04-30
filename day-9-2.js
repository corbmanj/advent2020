var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('day-9.txt')
});
const bufferLength = 25

function findSum() {
    let foundSolution = false
    while (!foundSolution) {
        const solutionArray = []
        let sum = 0
        let arrayMember = 0
        while (sum <= offensiveNumber) {
          sum += allNumbers[arrayMember]
          solutionArray.push(allNumbers[arrayMember])
        //   console.log(sum, solutionArray)
          if (sum === offensiveNumber) {
              foundSolution = true
              console.log(solutionArray)
              console.log(Math.min(...solutionArray) + Math.max(...solutionArray))
              break;
          }
          arrayMember++
        }
        allNumbers.shift()
    }
}

let numberBuffer = []
let allNumbers = []
let offensiveNumber = 0
lineReader.on('line', function (line) {
    const newNumber = Number(line)
    allNumbers.push(newNumber)
    if (numberBuffer.length < bufferLength) {
        numberBuffer.push(newNumber)
    } else {
    
    const hasMatch = numberBuffer.some(num => numberBuffer.includes(newNumber - num) && num * 2 !== newNumber)
    if (!hasMatch && numberBuffer.length === bufferLength) {
        console.log(newNumber)
        offensiveNumber = newNumber
    }
    numberBuffer.shift()
    numberBuffer.push(newNumber)
    }
});

lineReader.on('close', function () {
    findSum()
})
