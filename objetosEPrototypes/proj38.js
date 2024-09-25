const pessoas = [
  { id: 3, nome: 'Thiago'},
  { id: 2, nome: 'João'},
  { id: 1, nome: 'Alberto'},
];

const novasPessoas = new Map();
for(const pessoa of pessoas) {
  const {id} = pessoa;
  novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas.get(2));
