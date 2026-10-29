const valores = [10, 20, 30, 40];
const resultado = valores
.filter(v => v >= 20)
.map(v => v / 2)
.reduce((soma, atual) => soma + atual, 0);
console.log(resultado);

