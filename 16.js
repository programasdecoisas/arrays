var alunos = [
 { nome: "joão", idade: 15 },
 { nome: "josé", idade: 18 },
 { nome: "maria", idade: 20 }
];
var todosAlunosMaiores = alunos.every(aluno => aluno.idade > 18);
console.log(todosAlunosMaiores); // false
