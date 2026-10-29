var alunos = [
{nome:"joão", idade: 15},
{nome:"josé", idade: 18},
{nome:"maria", idade: 20}];
var alunosMaiores = alunos.filter(aluno => aluno.idade >= 18);
console.log(alunosMaiores); // [{nome:’josé', idade:18}, {nome:'maria', idade:20}]
