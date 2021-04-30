var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('day-6.txt')
});

function resetObj() {
    allChoices = []
}

function evalObj() {
    let count = 0
    const firstMember = allChoices[0]
    console.log('first', firstMember)
    console.log('all', allChoices)
    firstMember.forEach(yes => {
      if (allChoices.every(set => set.includes(yes))) {
          count ++
      }
    })
    console.log('count', count)
    total = total + count
}
let total = 0
let allChoices = []
lineReader.on('line', function (line) {
    if (line === "") {
        evalObj()
        resetObj()
    }
    else {
        lineFields = line.split('');
        allChoices.push(lineFields)
    }
});

lineReader.on('close', function () {
    evalObj()
    console.log("total", total)
})
