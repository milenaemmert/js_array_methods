/* .map() cria um array novo, retorna array novo com o resultado da função que passou em cada elemento do array original */

const bolotas = [
    {nome: 'belirio', idade: 9},
    {nome: 'botinhas', idade: 4}, 
    {nome: 'dana', idade: 7}
]

function mapear(lista, callback) {
    const listaCopia = [...lista] //spread operator para voltar uma camada
    const listaNova = []

    for(let i = 0; i < listaCopia.length; i++) {
        //criando uma posição
        listaNova[listaNova.length] = callback(listaCopia[i], i, listaCopia)
    }

    return listaNova
}

//mapeando array de objetos 'bolotas', acessando nome dos elementos:
console.log(mapear(bolotas, elem => elem.nome))
//verificando que o array original continua intacto:
console.log(bolotas)