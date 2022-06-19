import {input} from './io_utils.js'

function main(){
    //Entrada
    const qtd = Number(input('Quantidade de pares: '))
    
    //Saida
    divisor(qtd)
}

//Processamento
function divisor(qtd){
    let cont = 0

    while(cont < qtd){
        const pares = input('Digite os numeros: ').split(' ').map(Number)
        const n1 = pares[0]
        const n2 = pares[1]
        if(n2 !== 0){
            const divisao = n1/n2
            console.log(divisao.toFixed(1))
        }else{
            console.log('Divisao impossivel')
        }
        cont++
    }
}

main()