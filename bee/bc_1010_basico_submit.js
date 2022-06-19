import {input,print} from './io_utils.js'

function main(){
    //entrada
    const codpeca1 = input('codigo da peça 1: ')
    const codpeca2 = input('codigo da peça 2: ')
    
    const npeca1 = input('numero da peça 1: ')
    const vpeca1 = input('valor da peça 1: ')
    
    const npeca2 = input('numero da peça 2: ')
    const vpeca2 = input('valor da peça 2: ')
    
    //processamento
    const valor = npeca1*vpeca1 + npeca2*vpeca2
    
    //saida
    print(`VALOR A PAGAR: R$ ${valor.toFixed(2)}`)

}
main()