var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('day-6.txt')
});

function resetObj() {
    obj = new Set()
}

function evalObj() {
    // console.log(obj.size)
    // return obj.size
    total = total + obj.size
}
let total = 0
let obj = new Set()
lineReader.on('line', function (line) {
    if (line === "") {
        evalObj()
        console.log(obj)
        resetObj()
    }
    else {
        lineFields = line.split('');
        lineFields.forEach(field => {
            obj.add(field)
        })
    }
});

lineReader.on('close', function () {
    evalObj()
    console.log("total", total)
})
