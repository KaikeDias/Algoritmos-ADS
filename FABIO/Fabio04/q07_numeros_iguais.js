import {input} from './io_utils.js'

function main(){
    const num = Number(input('Numero: '))
    let lista = Number(input('Numero: '))
    
    while(num !== lista){
        console.log('Os números são diferentes')
        lista = Number(input('Numero: '))
    }

}

main()