var alunos = [ 
 {nome: 'joão', idade: 15}, 
 {nome: 'josé', idade: 18}, 
 {nome: 'maria', idade: 20}
];
var todosAlunosMaiores = true;
for (var i = 0; i < alunos.length; i++) { 
 if (alunos[i].idade < 18) {
 todosAlunosMaiores = false;
 break; // evita percorrer o restante da lista
 }
}
console.log(todosAlunosMaiores); // false (porque joão tem 15)
