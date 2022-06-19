import {input} from './io_utils.js'
import {eh_par} from './nicolas_utils.js'
function main(){
    const frase = input('Frase: ').split(' ')

    let pares = 0
    let impares = 0
    let caracteres = 0

    for(let palavra of frase){
        if(eh_par(palavra.length)){
            pares++
        }else{
            impares++
        }
        caracteres += palavra.length
    }

    console.log(`Pares: ${pares}`)
    console.log(`Ímpares: ${impares}`)
    console.log(`Caracteres: ${caracteres}`)
}

main()