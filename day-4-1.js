var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('day-4-1.txt')
});

const requiredFields = [
    'byr',
    'iyr',
    'eyr',
    'hgt',
    'hcl',
    'ecl',
    'pid'
]

let validCount = 0;
let obj = {};

function resetObj () {
    obj = {}
}

function evalObj() {
    if (requiredFields.every(field => !!obj[field])) {
        validCount++
    }
}

lineReader.on('line', function (line) {
    if (line === "") {
        console.log('blank')
        // console.log(evalObj())
        evalObj()
        console.log(obj)
        resetObj()
    }
    else {
        lineFields = line.split(' ');
        lineFields.forEach(field => {
            const [key, value] = field.split(':');
            obj[key] = value;
        })
    }
});

lineReader.on('close', function () {
    evalObj()
    console.log(validCount);
})
