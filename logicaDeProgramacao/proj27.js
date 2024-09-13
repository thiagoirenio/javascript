// while e cria um laço ate fica falsso se já for falso ele para
// do while significa faça e depois cheque
function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;
// let rand = random(min, max);
let rand = 10;
// console.log(rand !== 10);

while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}

console.log(`####`);

do {
  rand = random(min, max);
  console.log(rand);
} while (rand !== 10);
