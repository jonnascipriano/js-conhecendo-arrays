const vendedores = ['Jonnas', 'Suzy', 'Maria', 'Fernando']
const idade = [25,23,35,36]

const lista = [vendedores, idade]

function idadeVendedor(vendedor){
    if(lista[0].includes(vendedor)){
        const indice = lista[0].indexOf(vendedor)
        const idadeArr = lista[1][indice]
        console.log(`O vendedor(a) ${vendedor} tem ${idadeArr} anos!`)
    } else {
        console.log(`'${vendedor}' não consta na lista de vendedores na filial!`)
    }
}
idadeVendedor(prompt('Digite o nome do vendedor:'))