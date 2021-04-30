var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('day-7.txt')
});

function getInteriorBag(type, count) {
    console.log(type, count, currentTotal);
    for (let interior of obj[type]) {
        console.log('inter', interior);
        if (interior.count) {
          currentTotal += interior.count * count;
          getInteriorBag(interior.type, interior.count * count)
        }
    }
}

function evalObj() {
    getInteriorBag('shiny gold', 1);
}
let obj = {}
let currentTotal = 0
const regex = new RegExp(/(\d)\s(\w+\s\w+)\sbags?/, 'g');
lineReader.on('line', function (line) {
    if (line === "") {
    }
    else {
        const [container, contents] = line.split('contain');
        let contentsArray = []
        let bagTypes;
        while ((bagTypes = regex.exec(contents)) !== null) {
            contentsArray.push({count: bagTypes[1], type: bagTypes[2]})
        }
        obj[container.split(' bags')[0]] = contentsArray;
    }
});

lineReader.on('close', function () {
    evalObj()
})
