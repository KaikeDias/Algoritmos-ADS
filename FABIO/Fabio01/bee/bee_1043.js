import {input} from '../io_utils.js'

function main(){
    //entrada
    const A = Number(input('A: '))
    const B = Number(input('B: '))
    const C = Number(input('C: '))

    //processamento
    if (A+B>C && B+C>A && A+C>B){
        const perimetro = A+B+C
        console.log(`Perimetro = ${perimetro.toFixed(1)}`)
    }else{
        const area = ((A+B)*C)/2
        console.log(`Area = ${area.toFixed(1)}`)
    }



}
main()