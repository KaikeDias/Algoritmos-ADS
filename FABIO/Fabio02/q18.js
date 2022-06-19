import {input} from './io_utils.js'

function main(){
    //entrada
    const n1 = Number(input('Primeiro valor: '))
    const n2 = Number(input('Segundo valor: '))
    const operacao = Number(input('Qual operacao deseja efetuar? '))

    //processamento
    console.log(resultado(n1,n2,operacao))

}

function resultado(n1,n2,operacao){
    if (operacao === 1){
        const soma = n1 + n2
        return soma

    }else if(operacao === 2){
        const subtracao = n1 - n2
        return subtracao

    }else if(operacao === 3){
        const multiplicacao = n1 * n2
        return multiplicacao

    }else if(operacao === 4){
        const divisao = n1 / n2
        return divisao
    }
}

main()