import {input} from './io_utils.js'

function main(){
    const numero = Number(input('Numero: '))

    fatorial_numero(numero)
}

function fatorial_numero(numero){
    let cont = numero - 1
    let fatorial = numero * cont
    let saida = `${numero}! = ${numero} x ${cont} `

    while(cont > 1){
        cont--
        fatorial = fatorial * cont
        saida += `x ${cont} `
    }

    console.log(`${saida}= ${fatorial}`)
    
}

main()