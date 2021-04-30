var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('day-9.txt')
});
const bufferLength = 25

let numberBuffer = []
lineReader.on('line', function (line) {
    const newNumber = Number(line)
    if (numberBuffer.length < bufferLength) {
        numberBuffer.push(newNumber)
    } else {
    
    const hasMatch = numberBuffer.some(num => numberBuffer.includes(newNumber - num) && num * 2 !== newNumber)
    if (!hasMatch && numberBuffer.length === bufferLength) {
        console.log(newNumber)
    }
    numberBuffer.shift()
    numberBuffer.push(newNumber)
    }
});

lineReader.on('close', function () {
    // executeProgram()
})
