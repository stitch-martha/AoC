import {readFileSync} from 'fs'

const input = readFileSync('day5/stacks.txt', 'utf8').split('\n').slice(0, 8);

let rows = input.map((line) => {
  let rw = [...line.matchAll(/[A-Z]|    ?/g)]
  return rw.map((match) => match[0])
});

const initialCrates = [[], [], [], [], [], [], [], [], []]

export function createCrates() {
  let crates = rows[0].map((_,i) => {
    return rows.map((row) => row[i]).reverse();
});
return crates.map(col => col.filter(x => x !== '    '))
}