import {input} from './io_utils.js'
import {inverter} from './strings_utils.js'

function main(){
    let palavra = input('Palavra: ')

    if(eh_palindroma(palavra)){
        console.log('É uma palavra palíndroma')
    }else{
        console.log('Não é uma palavra palíndroma')
    }

    while(!eh_palindroma(palavra)){
        palavra = input('Palavra: ')

        if(eh_palindroma(palavra)){
            console.log('É uma palavra palíndroma')
        }else{
            console.log('Não é uma palavra palíndroma')
        }
    }

}

function eh_palindroma(palavra){
    if(palavra === inverter(palavra)){
        return true
    }else{
        return false
    }

}

main()