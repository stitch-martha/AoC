import {readFileSync} from 'fs'

const input = readFileSync('day5/data.txt', 'utf8').split('');

function isNotDuplicate(arr) {
  return new Set(arr).size === arr.length
}

function whenDoDuplicatesStop() {
  let initialInput = input.slice(0, 4)
  for (let i = 4; i < input.length; i++) {
    initialInput = [...initialInput.slice(1, 4), input[i]]
    if (isNotDuplicate(initialInput)) {
      console.log(i + 1)
      return i + 1
    }
  }
}

function whenDoDuplicatesStopv2() {
  let initialInput = input.slice(0, 14)
  for (let i = 14; i < input.length; i++) {
    initialInput = [...initialInput.slice(1, 14), input[i]]
    if (isNotDuplicate(initialInput)) {
      console.log(i + 1)
      return i + 1
    }
  }
}

whenDoDuplicatesStop()
whenDoDuplicatesStopv2()