import {input} from '../io_utils.js'

function main(){
    //entrada
    const A = Number(input('A: '))
    const B = Number(input('B: '))
    const C = Number(input('C: '))

    const AA = A*A
    const BC = B*B+C*C

    //processamento
    if (A>= B+C && B>=A+C && C>=A+B){
        console.log('NAO FORMA TRIANGULO')
    }
    if(AA===BC){
        console.log('TRIANGULO RETANGULO')
    }
    if(AA>BC){
        console.log('TRIANGULO OBTUSANGULO')
    }
    if(AA<BC){
        console.log('TRIANGULO ACUTANGULO')
    }
    if(A===B && B===C && C===A){
        console.log('TRIANGULO EQUILATERO')
    }
    if(A===B || A===C || B===C){
        console.log('TRIANGULO ISOSCELES')
    }



}
main()