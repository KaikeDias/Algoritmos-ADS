import {input} from './io_utils.js'

function main(){
    //entrada
    const numero = Number(input('Digite um numero entre 0 e 100: '))

    //saida
    console.log(primo(numero))
    
}

function primo(n1){
    let n = 0

    if (n1 % n1 === 0){
        n = 'é um numero primo'
        if(n1 > 2 && n1 % 2 === 0){
            n = 'não é primo'
        }else if(n1 > 3 && n1 % 3 === 0){
            n = 'não é primo'
        }else if(n1 > 5 && n1 % 5 === 0){
            n = 'não é primo'
        }else if(n1 > 7 && n1 % 7 === 0){
            n = 'não é primo'
        }
    }
    return n

}

main()