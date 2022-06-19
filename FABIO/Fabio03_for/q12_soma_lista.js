import {input} from './io_utils.js'

function main(){
    const N = Number(input('N: '))
    let numero
    let soma = 0

    for(let num = 1; num <= N; num++){
        numero = Number(input('Numero: '))
        soma += numero
    }  

    const media = soma/N

    console.log(`A soma e a média dos ${N} numeros digitados são,respectivamente, ${soma} e ${media}`)
}

main()