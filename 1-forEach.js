const precos = [15.90, 19.90, 10]
let contador = 0

function paraCada (lista, callback) {
    for (let i = 0; i < lista.length; i++) {
        callback(lista[i], i, lista)
    }
}

/* paraCada(precos, elem => contador += elem)
console.log(contador) // 45.8 */

/*paraCada(precos, (elem, index) => contador += index)
console.log(contador) // 3 */

paraCada(precos, (elem, index, lista) => contador += lista.length)
console.log(contador) //9
