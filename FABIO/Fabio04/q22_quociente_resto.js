import {input} from './io_utils.js'

function main(){
    const n1 = Number(input('Numero: '))
    const n2 = Number(input('Numero: '))

    
    let divisao = quociente(n1,n2)
    divisao--
    const resto = n1-(n2*divisao)
    
    console.log(`Quociente da divisao: ${divisao}`)
    console.log(`Resto da divisao: ${resto}`)
}

function quociente(n1,n2){
    let divisao = 1
    while(divisao * n2 <= n1){
        divisao++

    }   
    return divisao
}

main()