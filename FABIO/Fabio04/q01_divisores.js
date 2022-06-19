import {input} from './io_utils.js'

function main(){
    const lista = Number(input('Quantos numeros irá digitar: '))
    let numero
    let divisores
    let cont = 0

    while(cont < lista){
        numero = Number(input('Numero: '))
        divisores = eh_divisor(numero)
        console.log(divisores)
    }


}

function eh_divisor(numero){
    let divisores = (`Divisores de ${numero}: `)
    let cont = 0

    while(cont < numero){
        if(numero % cont === 0){
            divisores += `${cont} `
        }
        cont++
    }

    return divisores

}

main()