import {input} from './io_utils.js'

function main(){
    let resultado = 0
    let saida = ''
    for(let num = 1; num <= 10; num++){
        for(let cont = 1; cont <= 10; cont++){
            resultado = num * cont
            console.log(`${num} x ${cont} = ${resultado}`)
        }
    }

}

main()