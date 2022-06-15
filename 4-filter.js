const bolotas = [
    {nome: 'belirio', idade: 9},
    {nome: 'botinhas', idade: 4}, 
    {nome: 'dana', idade: 7},
    {nome: 'ramoni', idade: -8},
    {nome: 'brutus', idade: 5}
]

function filtrar(lista, callback) {
    const listaCopia = [...lista]
    const listaNova = []

    for(let i = 0; i < lista.length; i++) {
        if(callback(listaCopia[i], i, lista)) {
            listaNova[listaNova.length] = listaCopia[i]
        } 
    }

    return listaNova
}

//filtrando elementos por idade menor que 5, retornando novo array:
console.log(filtrar(bolotas, (elem, index) => elem.idade < 5))
//não modifica array original:
console.log(bolotas)