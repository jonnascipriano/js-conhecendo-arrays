console.log('*** ex 01 ***')
// Iterar sobre um array e imprimir cada elemento com seu índice
const imprimirArr = [23,27,36,48,56]

imprimirArr.forEach((elemento, indice) => {
    // Imprimir o elemento e seu índice em um formato amigável
    console.log(`${elemento}[${indice}]`)
})


console.log('*** ex 02 ***')
// Função que aplica uma operação a cada elemento de um array
function executaOperacaoEmArray(array, funcaoCallback){
    // Retorna um novo array com os resultados da aplicação da função callback
    return array.map(funcaoCallback)
}

// Função que dobra um número
function dobraNumero(num){
    return num * 2
}

const listaNumero = [1,2,3]
// Aplicar a função dobraNumero a cada elemento e armazenar em um novo array
const listaNumeroDobrados = executaOperacaoEmArray(listaNumero, dobraNumero)
console.log(listaNumeroDobrados)


console.log('*** ex 03 ***')
// Encontrar a posição de um número em um array
const valNum = [2,4,6,8,10]
const numeroProcurado = 8
// Inicializar a posição como -1 (não encontrado)
let posicao = -1

// Iterar sobre o array para encontrar o número
for(let i = 0; i < valNum.length; i++){
    if(valNum[i] === numeroProcurado){
        // Se encontrar, armazenar a posição e interromper o loop
        posicao = i
        break
    }
}

console.log(`A posição do número ${numeroProcurado} é ${posicao}`)


console.log('*** ex 04 ***')
// Concatenar dois arrays e encontrar um elemento específico
const nomesTurmaA = [
    'João Silva',
    'Maria Santos',
    'Pedro Almeida'
];
const nomesTurmaB = [
    'Carlos Oliveira',
    'Ana Souza',
    'Lucas Fernandes'
];

// Combinar os dois arrays em um único
const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB)
// Encontrar o primeiro elemento que corresponde ao nome procurado
const alunoProcurado = todasAsTurmas.find(nome => nome === 'Ana Souza')

if(alunoProcurado){
    console.log(`Aluno procurado: ${alunoProcurado}`)
} else {
    console.log(`Aluno não encontrado`)
}


console.log('*** ex 04 ***')
const numeros = [6, 9, 12, 15, 18, 21];

const numMultiplicado = numeros.forEach(nums => console.log(nums*3))

// Criar um novo array com os números triplicados
const numerosTriplicados = numeros.map(num => num * 3)

// Encontrar o índice do primeiro elemento que corresponde ao número procurado
const numProcurado = numeros.findIndex(num => num === 18)

if(numProcurado !== -1){
    console.log(`O numero procurado está no indice ${numProcurado}`)
} else {
    console.log(`Número não encontrado no array.`)
}