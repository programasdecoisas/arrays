var pesoDasMalas = [12,32,21,29];
var temMalaAcimaDoPeso = pesoDasMalas.some(function(pesoDaMala) { 
return pesoDaMala > 30;
});
console.log(temMalaAcimaDoPeso);  //true
