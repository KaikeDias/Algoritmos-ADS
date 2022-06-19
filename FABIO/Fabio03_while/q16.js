import {input} from './io_utils.js'

function main(){
    const N = Number(input('N: '))

    let anterior = 0
    let atual = 1
    let proximo = 1
    let cont = 1
    let resultado = `${anterior}`
    if(N >= 2){
        while(cont <= N){
            resultado += `, ${proximo}`
            proximo = atual + anterior
            anterior = atual
            atual = proximo
            cont++
        }
        console.log(`(${resultado})`)
    }else{
        console.log("valor 'N' invalido")
    }

}

main()