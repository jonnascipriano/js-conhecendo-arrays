console.log('******** Exercicios ********')
console.log('******** 01 ********')
let arr1 = ['João', 'Maria']
let arr2 = ['Francisco', 'Raimunda']
let arrConc = arr1.concat(arr2)

console.log(arr1)
console.log(arr2)
console.log(arrConc)


console.log('******** 02 ********')
let arrayNum = [1,2,3,4,5,6,7,8,9,10]
let parteNumeros = arrayNum.slice(3,7)

console.log(arrayNum)
console.log(parteNumeros)


console.log('******** 03 ********')
const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']
frutas.splice(2,2,'Kiwi', 'Pessego')
console.log(frutas)


console.log('******** 04 ********')
let menuPrincipal = ['Gado', 'Frango', 'Calabresa', 'Linguiça']
let menuDeSobremesas = ['Mousse', 'Sorvete', 'Picole']

let menuCompleto = menuPrincipal.concat(menuDeSobremesas)

console.log(menuCompleto)



console.log('******** 05 ********')
let matriz = []
let valorInicial = 1

for(let i = 0; i < 3; i++){
    let linha = []
    for(let j = 0; j < 3; j++){
        linha.push(valorInicial++)
    }
    matriz.push(linha)
}

console.log(matriz)
matriz.forEach(row => console.log(row))




console.log('******** 06 ********')
console.log('Elemento na segunda linha e terceira coluna:', matriz[1][2]);



console.log('******** 07 ********')
matriz[2][1] = 15;
console.log('Matriz após adição de elemento:', matriz);
