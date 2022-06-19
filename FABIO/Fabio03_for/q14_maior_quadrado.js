import {input} from './io_utils.js'

function main(){
    const N = Number(input('N: '))

    let maior = 0

    for(let num = 1; num <= N; num++){
        if(eh_quadrado(num)){
            if(num > maior){
                maior = num
            }
        }
    }

    console.log(maior)

}

function eh_quadrado(num){
    if(Math.sqrt(num) % 1 === 0){
        return true
    }

}

main()