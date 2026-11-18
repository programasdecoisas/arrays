let numeros = [12, 34, 21, 5, 92]

function organizar(lista) {
    let i = 0
    while(i<numeros.length){
    let numeros1 = []
    let Min = Math.min(numeros)
    numeros1.push(Min)
    numeros.Splice(numbers.index(Min), 1)
    i++
    }
    console.log(numeros1)
}

organizar(numeros)