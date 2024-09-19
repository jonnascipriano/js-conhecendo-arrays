console.log('*** ex 01 ***')




console.log('*** ex 02 ***')
const valores = [1,5,7,12,44]
console.log(valores.reduce((acul, value) => acul + value))


console.log('*** ex 03 ***')
const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

const todasCores = coresLista1.concat(coresLista2)

const listaTodasCores = [...new Set(todasCores)]

console.log(todasCores)
console.log(listaTodasCores)


console.log('*** ex 04 ***')
function filtraNumerosPares(arr){
    return arr.filter(num => num % 2 === 0)
}

const numArray = [1,2,3,4,5,6]
const listaNumerosPares = filtraNumerosPares(numArray)

console.log(listaNumerosPares)