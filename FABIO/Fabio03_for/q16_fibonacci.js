import {input} from './io_utils.js'

function main(){
    const N = Number(input('N: '))

    let anterior = 0
    let atual = 1
    let proximo = 1
    let resultado = `${anterior}`

    if(N >= 2){
        for(let num = 1; num < N; num++){
            resultado += `, ${proximo}`
            proximo = atual + anterior
            anterior = atual
            atual = proximo
        }
        console.log(resultado)

    }else{
        console.log('Valor N invalido')
    }

}

main()