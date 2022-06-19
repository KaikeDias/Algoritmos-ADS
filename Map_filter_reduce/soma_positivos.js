import {soma_elementos_positivos} from './vetor_utils.js'

function main(){
    const vetor = [1, -4, 12, 0, -3, 29, -150]
    const soma = soma_elementos_positivos(vetor)

    console.log(vetor)
    console.log(`Soma: ${soma}`)
}

main()