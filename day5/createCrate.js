import {readFileSync} from 'fs'

const input = readFileSync('day5/stacks.txt', 'utf8').split('\n').slice(0, 8);

let rows = input.map((line) => {
  let rw = [...line.matchAll(/[A-Z]|    ?/g)]
  return rw.map((match) => match[0])
});

const initialCrates = [[], [], [], [], [], [], [], [], []]

export function createCrates() {
  rows.forEach(row => row.forEach((letter, index) => letter !== '    ' && initialCrates[index].unshift(letter)))
  return initialCrates
}

createCrates()
