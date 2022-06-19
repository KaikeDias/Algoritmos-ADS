import {input} from './io_utils.js'

function main(){    
    const aleatorio = Number((Math.random()*1000).toFixed(0))

    let numero = Number(input('Digite um numero: '))

    while(numero !== aleatorio){
        numero = Number(input('Digite um numero: '))
        if(numero < aleatorio){
            console.log('O numero que voce digitou é menor')
        }else if(numero > aleatorio){
            console.log('O numero que voce digitou é maior')
        }
    }

    console.log(`Correto o numero é ${aleatorio}`)
   
}   

main()