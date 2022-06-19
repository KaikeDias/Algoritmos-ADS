import {input} from './io_utils.js'

function main(){
    const a0 = Number(input('A0: '))
    const limite = Number(input('Limite: '))
    const razao = Number(input('Razao: '))

    for(let num = a0; num <= limite; num *=razao){
        console.log(num)
    }
}

main()