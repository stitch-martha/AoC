import {readFileSync} from 'fs'

const input = readFileSync('day8/data.txt', 'utf8').split('\n').map(n => n.split(''))

const transverseInput =
  input[0].map((_,i) => {
    return input.map((row) => row[i]).reverse();
});

const isTallerThan = (number, array) => {
  for(let index = 0; index <= array.length; index++) {
    if(parseInt(number) <= parseInt(array[index])) {
      return false
    }
  }
  return true;
}


const calculateScore = (number, array) => {
  let score = 0;
  for(let index = 0; index <= array.length; index++) {
    if(parseInt(number) <= parseInt(array[index])) {
      score ++
      break;
    }
    if(parseInt(number) > parseInt(array[index])) {
      score ++
    }
  }   
    return score;
}

let score = 0; 
let highestScenicScore = 0; 

// function totalOneDimScore(input) {
//   input.forEach((row, rowIndex) => {
//     for(let index = 0; index < row.length; index++) {
//       const previousRow = row.slice(0, index)
//       const afterRow = row.slice(index+1, row.length)
//       const column = transverseInput[index]
//       const positionInColumn = column.length - rowIndex -1
//       const previousColumn = column.slice(0, positionInColumn)
//       const afterColumn = column.slice(positionInColumn +1, column.length)
//       if(isTallerThan(row[index], previousRow)) {
//         score++
//       }
//       else if(isTallerThan(row[index], afterRow)) {
//         score++
//       }
//       else if(isTallerThan(row[index], previousColumn)) {
//         score++
//       }
//       else if(isTallerThan(row[index], afterColumn)) {
//         score++
//       }
//     }
//   })
//   console.log(score)
// }

function calculateHighestScenic(input) {
  input.forEach((row, rowIndex) => {
    for(let index = 0; index < row.length; index++) {
      const previousRow = row.slice(0, index).reverse()
      const afterRow = row.slice(index+1, row.length)
      const column = transverseInput[index]
      const positionInColumn = column.length - rowIndex -1
      const previousColumn = column.slice(0, positionInColumn).reverse()
      const afterColumn = column.slice(positionInColumn +1, column.length)
      let score = calculateScore(row[index], previousRow) * calculateScore(row[index], afterRow) * calculateScore(row[index], previousColumn) * calculateScore(row[index], afterColumn)
      if (score > highestScenicScore) {
        highestScenicScore = score
      }
    }
  })
  console.log(highestScenicScore)
}

console.log(calculateHighestScenic(input))
