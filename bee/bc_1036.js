import {input} from './io_utils.js'

function main(){
    const numeros = input('Digite 3 numeros: ').split(' ').map(Number)
    const A = numeros[0]
    const B = numeros[1]
    const C = numeros[2]
    
    const delta = B * B - 4 * A * C
    const raiz1 = ((B * -1) + Math.sqrt(delta))/(2*A)
    const raiz2 = ((B * - 1) - Math.sqrt(delta))/(2*A)
    
    if (A === 0){
        console.log('Impossivel calcular')
    }else if(delta < 0){
        console.log('Impossivel calcular')
    }else{
        console.log(`R1 = ${raiz1}`)
        console.log(`R2 = ${raiz2}`)
    }
    
}

main()