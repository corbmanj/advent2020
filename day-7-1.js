var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('day-7.txt')
});

function evalObj() {
    let possibleContainers = new Set()
    possibleContainers.add('shiny gold')
    let oldContainersLength = 0
    let newContainersLength = 1
    do {
      oldContainersLength = possibleContainers.size
      let newPossibleContainers = new Set(possibleContainers)
      possibleContainers.forEach(container => {
          Object.keys(obj).forEach(bagType => {
            if (obj[bagType].includes(container)) {
                newPossibleContainers.add(bagType)
            }
          })
      })
      possibleContainers = newPossibleContainers;
      newContainersLength = possibleContainers.size
      console.log('poss', possibleContainers, oldContainersLength, newContainersLength);

    } while (oldContainersLength !== newContainersLength)
}
let obj = {}
const regex = new RegExp(/\d\s(\w+\s\w+)\sbags?/, 'g');
lineReader.on('line', function (line) {
    if (line === "") {
    }
    else {
        const [container, contents] = line.split('contain');
        let contentsArray = []
        let bagTypes;
        while ((bagTypes = regex.exec(contents)) !== null) {
            contentsArray.push(bagTypes[1])
        }
        obj[container.split(' bags')[0]] = contentsArray;
    }
});

lineReader.on('close', function () {
    evalObj()
})
