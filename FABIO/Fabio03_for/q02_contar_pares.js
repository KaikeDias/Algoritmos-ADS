import {input} from './io_utils.js'

function main(){
    const N = Number(input('N: '))

    const resultado = contador(N)

    console.log(resultado)

}

function contador(N){
    let resultado = '2'

    for(let num = 3; num <= N; num++){
        if(eh_par(num)){
            resultado += `, ${num}`
        }
    }

    return resultado
}

function eh_par(num){
    return num % 2 === 0

}

main()