import {readFileSync} from 'fs'

const input = readFileSync('day10/data.txt', 'utf8').split('\n');
const instructions = input.map(i =>i.split(' '))


function getXAfterCycleN(cycleN, input) {
  let x = 1;
  let cycle = 0;
  input.forEach(([instr, value])=> {
    console.log(instr, value)
    instr == 'addx'? cycle += 2 : cycle ++
    if(cycle < cycleN) {
      instr == 'addx' && (x += parseInt(value))
    }
  })
  console.log(x)
  return x * cycleN;
}

function createLine() {
  let lineLength = -1
  let grid = []
  let line = [];
  let x = 1;
  instructions.forEach(([_, value])=> {
    lineLength ++
    (x == lineLength || x == lineLength - 1 || x == lineLength + 1)? line.push('#') : line.push('.')
    if(lineLength == 39) {
      grid.push(line)
      lineLength = -1
      line = []
    }
    if(value) {
      lineLength++
      (x == lineLength || x == lineLength - 1 || x == lineLength + 1)? line.push('#') : line.push('.')
      if(lineLength == 39) {
        grid.push(line)
        lineLength = -1
        line = []
      }
      x+= parseInt(value)
    }
    
  })
  return grid.map(g => g.map(x=> x.replace('#', '🌟').replace('.', '🌲')).join(''));
}
// const sum = getXAfterCycleN(20, instructions) +  getXAfterCycleN(60, instructions) +  getXAfterCycleN(100, instructions) +  getXAfterCycleN(140, instructions) + getXAfterCycleN(220, instructions) + getXAfterCycleN(180, instructions) 
console.log(createLine())
