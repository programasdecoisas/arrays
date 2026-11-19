let numeros = [12, 34, 21, 5, 92]

function organizar(lista) {
    let i = 0
    while(i<numeros.length){
    let numeros1 = []
    let low = Math.min(numeros)
    numeros1.push(low)
    numeros.Splice(numeros.index(low), 1)
    i++
    }
    console.log(numeros1)
}

organizar(numeros)