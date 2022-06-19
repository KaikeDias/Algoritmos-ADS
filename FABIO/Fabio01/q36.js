//Obs: posso ter errado na interpretação da questao mas foi isso o que eu entendi que era pra fazer

import{input,print} from './io_utils.js'

function main(){
    //entrada
    const idade = Number(input('digite a idade: '))

    //processamento
    const meses = idade * 12
    const dias = meses * 30 
    
    //saida
    print(`A idade expressa em dias é ${dias}`)
}
main()