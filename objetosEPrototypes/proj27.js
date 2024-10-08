function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function(percentual) {
  this.preco = this.preco - (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);

const p2 = {
  nome: 'Caneca',
  preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);

const p3 = Object.create(Produto.prototype);
p3.preco = 113;
p3.aumento(10);
console.log(p3);
