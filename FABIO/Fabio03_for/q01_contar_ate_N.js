import {input} from './io_utils.js'

function main(){
    const N = Number(input('N: '))

    const resultado = contador(N)

    console.log(resultado)

}

function contador(N){
    let resultado = '1'

    for(let num = 2; num <= N; num++){
        resultado += `, ${num} `
    }

    return resultado
}

main()