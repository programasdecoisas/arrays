var alunos = [
{nome:"joão", idade: 15},
{nome:"josé", idade: 18},
{nome:"maria", idade: 20}];
var alunosMaiores = [];
for (var i = 0; i < alunos.length; i++) {
 if(alunos[i].idade >=18) {
alunosMaiores.push(alunos[i]);
}
}
console.log(alunosMaiores); // [{nome:’josé', idade:18}, {nome:'maria', idade:20}]