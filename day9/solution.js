let hSpot = [0, 0];
let tSpot = [0, 0];

import {readFileSync} from 'fs'

const input = readFileSync('day9/data.txt', 'utf8').split('\n');

const splitInput = input.map(p => p.split(' '))

// console.log(splitInput)

const moveHead = (direction, hSpot) => {
  direction === 'U' && hSpot[1]++
  direction === 'D' && hSpot[1]--
  direction === 'R' && hSpot[0]++
  direction === 'L' && hSpot[0]--
  return hSpot;
}

const moveTail= (headCoords, tailCoords) => {
  const distanceX = Math.abs(headCoords[0] - tailCoords[0])
  const distanceY = Math.abs(headCoords[1] - tailCoords[1])
  if(distanceX > 1 || distanceY > 1) {
    console.log('hey')

    const directionX = headCoords[0] - tailCoords[0];
    tailCoords[0] += Math.abs(directionX) === 2 ? directionX / 2 : directionX;
    const directionY = headCoords[1] - tailCoords[1];
    tailCoords[1] += Math.abs(directionY) === 2 ? directionY / 2 : directionY;
  }
  return tailCoords;
}

const gridMove = () => {
  let allPlaces = []
  splitInput.forEach(([direction, places]) => {
    for(let i= 0; i< places; i++) {
      moveHead(direction, hSpot)
      moveTail(hSpot, tSpot)
      if(!(allPlaces.find(x => (x[0] == tSpot[0] && x[1] == tSpot[1])))) {
        allPlaces = [...allPlaces, [tSpot[0], tSpot[1]]]
      }      
    }
  })
  console.log(allPlaces.length)
} 

const moveSnake= () => {
  let allPlaces = []
  const knots = [[0, 0],[0, 0], [0, 0], [0, 0], [0, 0], [0, 0],[0, 0], [0, 0],[0, 0],[0, 0]];

  splitInput.forEach(([direction, places]) => {
    for(let i= 0; i< places; i++) {
      knots[0] = moveHead(direction, knots[0])
      for (let knot = 1; knot < knots.length; knot++) {
        knots[knot] = moveTail(knots[knot -1], knots[knot]);
      }
      const tail = knots[knots.length - 1];
      if(!(allPlaces.find(x => (x[0] == tail[0] && x[1] == tail[1])))) {
        allPlaces = [...allPlaces, [tail[0], tail[1]]]
      }   
    }
  })
  console.log(allPlaces.length)
}
console.log(moveSnake())
