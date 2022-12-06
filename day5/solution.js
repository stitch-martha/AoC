import {readFileSync} from 'fs'

const input = readFileSync('day5/data.txt', 'utf8').split('\n');


const stacks = [
  ['F', 'D', 'B', "Z", "T", 'J', 'R', 'N'],
  ['R', 'S', 'N', 'J', 'H'],
  ['C', 'R', 'N', 'J', 'G', 'Z', 'F', 'Q'],
  ['F', 'V', 'N', 'G', 'R', 'T', 'Q'],
  ['L', 'T', 'Q', 'F'],
  ['Q', 'C', 'W', 'Z', 'B', 'R', 'G', 'N'],
  ['F', 'C', 'L', 'S', 'N', 'H', "M"],
  ['D', 'N', 'Q', 'M', 'T', 'J'],
  ['P', 'G', 'S']
]

const inputSplit = input.map(i => i.replace('from ', '').replace('to ', '').replace('move ', '').split(' '))

function movingItems() {
  let newStacks = stacks
  inputSplit.forEach(([number, from, to]) => {
    const arrayToPush = newStacks[+from - 1].slice(-(number)).reverse()
    newStacks[+from - 1] = newStacks[+from - 1].slice(0, stacks[+from - 1].length - parseInt(number))
    arrayToPush.forEach(item => newStacks[+to - 1].push(item))
  })
  console.log(newStacks)
}

function movingItemsV2() {
  let newStacks = stacks
  inputSplit.forEach(([number, from, to]) => {
    const arrayToPush = newStacks[+from - 1].slice(-(number))
    newStacks[+from - 1] = newStacks[+from - 1].slice(0, stacks[+from - 1].length - parseInt(number))
    arrayToPush.forEach(item => newStacks[+to - 1].push(item))
  })
  console.log(newStacks)
}

movingItems()
movingItemsV2()