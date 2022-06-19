import {input} from './io_utils.js'

function main(){
    let emprestimo = Number(input('Emprestimo: '))
    let dias = 0

    while(emprestimo > 0){
        emprestimo -= 200
        emprestimo += emprestimo * 0.0085
        dias++
    }

    console.log(`Levarão ${dias} dias uteis para quitar o emprestimo`)
}

main()