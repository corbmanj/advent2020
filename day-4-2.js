var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('day-4-1.txt')
});

const requiredFields = {
    byr: (value) => !!value && value.length === 4 && Number(value) <= 2002 &&  Number(value) >= 1920,
    iyr: (value) => !!value && value.length === 4 && Number(value) <= 2020 &&  Number(value) >= 2010,
    eyr: (value) => !!value && value.length === 4 && Number(value) <= 2030 &&  Number(value) >= 2020,
    hgt: (value) => {
        if (!value) {
            return false
        }
        const valueArray = value.split('');
        const unit = valueArray.splice(-2, 2);
        const compareValue = valueArray.join('')
        if (unit.join('') === 'cm') {
          return compareValue >= 150 && compareValue <= 193
        } else if (unit.join('') === 'in') {
          return compareValue >= 59 && compareValue <= 76
        } else {
            return false
        }
    },
    hcl: (value) => !!value && (/#[a-f0-9]{6}/).test(value),
    ecl: (value) => !!value && value.length === 3 && ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].some(color => color === value),
    pid: (value) => !!value && value.length === 9 && (/[0-9]{9}/).test(value),
}

let validCount = 0;
let totalCount = 0;
let obj = {};

function resetObj () {
    obj = {}
}

function evalObj() {
    totalCount++
    if (Object.keys(requiredFields).every(field => {
        // console.log(field)
        console.log(obj['ecl'])
        console.log(requiredFields['ecl'](obj['ecl']))
        return requiredFields[field](obj[field])
    })) {
        validCount++
    }
}

lineReader.on('line', function (line) {
    if (line === "") {
        evalObj()
        // console.log(obj)
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
    console.log(validCount, totalCount);
})
