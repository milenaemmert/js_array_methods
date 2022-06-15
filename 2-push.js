/*adicionar(lista, elemento) -> lista.push()
> o método .push() retorna o length do array e modifica o array original
*/

const numeros = [10, 20, 30]

function adicionar(lista, elemento) {
    //tem que criar uma nova posição!
    lista[lista.length] = elemento
    return lista.length
}

console.log(adicionar(numeros, 40)) // 4

console.log(numeros) // [ 10, 20, 30, 40 ]
