var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('day-8.txt')
});

function executeLine(currentLine) {
    const [command, value] = currentLine;
    console.log(command);
    switch (command) {
        case 'acc':
            acc += Number(value);
            currentLineNumber++;
            break;
        case 'jmp':
            currentLineNumber += Number(value)
            break;
        case 'nop':
        default:
            currentLineNumber++;
  }
}

function executeProgram() {
    const exectuedLines = [];
    do {
        console.log(acc, currentLineNumber, lines[currentLineNumber], exectuedLines)
        // console.log(currentLine, lines[currentLine])
        exectuedLines.push(currentLineNumber);
        executeLine(lines[currentLineNumber]);
    } while (!exectuedLines.includes(currentLineNumber))
}
let lines = {}
let lineNumber = 1;
let acc = 0;
let currentLineNumber = 1;
lineReader.on('line', function (line) {
    if (line === "") {
    }
    else {
        const [command, value] = line.split(' ');
        lines[lineNumber] = [command, value]
        lineNumber++;
    }
});

lineReader.on('close', function () {
    // console.log(Object.keys(lines).length)
    executeProgram()
})
