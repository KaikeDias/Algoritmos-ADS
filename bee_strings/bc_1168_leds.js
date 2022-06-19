import {input} from './io_utils.js'
//import fs from 'fs'
//var input = fs.readFileSync('leds.txt', 'utf8');
//var lines = input.split('\n');

function main(){
    const N = Number(input('Numero de casos: '))
    //const N = Number(lines[0])
    let numeros
    let qtd_leds
    
    for(let num = 1; num <= N; num++){
        qtd_leds = 0
        numeros = input('Numero: ')
        //numeros = lines[num]

        qtd_leds = converter_leds(numeros)

        console.log(`${qtd_leds} leds`)
    }   

}

function converter_leds(numeros){
    const numero_led = [6,2,5,5,4,5,6,3,7,6,6]
    let numero 
    let qtd = 0 
    
    for(let i = 0; i < numeros.length; i++){
        numero = numeros[i]
        qtd += numero_led[numero]
    }

    return qtd
}

main()