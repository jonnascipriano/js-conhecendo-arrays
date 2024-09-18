console.log('************** 01 **************')

const nums = [1,2,3,4,5]

for(let num of nums){
    console.log(num)
}

console.log('************** 02 **************')

const arr1 = [2,4,6,8]

function exibArr(array){
    for(let i = 0; i < array.length; i++){
        console.log(`Índice: ${i} | Elemento: ${array[i]}`)
    }
}

exibArr(arr1)

console.log('************** 03 **************')

const numInt = [1,3,5,7,9]
let soma = 0

function arrSoma(array){
    for(let i = 0; i < numInt.length; i++){
        soma += array[i]
    }
    console.log(soma)
}

arrSoma(numInt)

console.log('************** 04 **************')
const numerosInt = [24,51,66,89]
let maiorNum = 0
let menorNum = Infinity
for(let i = 0; i < numerosInt.length; i++){

    if(numerosInt[i] > maiorNum){
        maiorNum = numerosInt[i]
    }

    if(numerosInt[i] < menorNum){
        menorNum = numerosInt[i]
    }

}

console.log(`O maior número é ${maiorNum} e o menor é ${menorNum}`)



console.log('************** 05 **************')
const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14]

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 == 0){
        console.log(numeros[i])
    }
}