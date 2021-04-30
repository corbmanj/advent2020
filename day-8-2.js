var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('day-8.txt')
});

function executeLine(currentLine) {
    const [command, value] = currentLine;
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

function getNewTest(changedLineArg) {
    let result = {}
    Object.keys(lines).forEach(line => {
        result[line] = [...lines[line]]
    })
    if (result[changedLineArg][0] === 'jmp') {
        result[changedLineArg][0] = 'nop'
    } else if (result[changedLineArg][0] === 'nop') {
        result[changedLineArg][0] = 'jmp'
    }
    return result
}

function executeProgram() {
    let exectuedLines = [];
    let foundSolution = false;
    while (!foundSolution) {
        changedLine++;
        const testSolution = getNewTest(changedLine)
        exectuedLines = []
        acc = 0
        currentLineNumber = 1
        while (!exectuedLines.includes(currentLineNumber)) {
            exectuedLines.push(currentLineNumber);
            if (currentLineNumber === Object.keys(lines).length + 1) {
                console.log('acc', acc, currentLineNumber, testSolution[currentLineNumber], exectuedLines)
                foundSolution = true;
            } else {
              executeLine(testSolution[currentLineNumber]);
            }
        } 
    }
}

let lines = {}
let lineNumber = 1;
let acc = 0;
let currentLineNumber = 1;
let changedLine = 0;
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
    executeProgram()
})
