var alunos = [
{nome:"joão", idade: 15},
{nome:"josé", idade: 18},
{nome:"maria", idade: 20}];
var aluno = alunos.find(function(aluno){
return aluno.nome === 'josé';
});
console.log(aluno); // {nome:’josé', idade:18} 
