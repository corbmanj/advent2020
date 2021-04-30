var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('day-10-test.txt')
});

let counts = {
}
let inputArray = [0]

function findJolts(sortedArray, max) {
  sortedArray.forEach((member, index) => {
      if (index > 0) {
          const diff = member - sortedArray[index-1]
          if (!counts[diff]) {
              counts[diff] = 0
          }
          counts[diff]++
      }
  })
//   console.log(sortedArray)
  console.log(counts)
  console.log(counts[3] * counts[1])
}

lineReader.on('line', function (line) {
    inputArray.push(Number(line))
});

lineReader.on('close', function () {
    const sortedArray = inputArray.sort((a, b) => a - b)
    sortedArray.push(Math.max(...inputArray)+3)
    findJolts(sortedArray)
})
