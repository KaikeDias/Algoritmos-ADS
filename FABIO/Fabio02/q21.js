import {input} from './io_utils.js'

function main(){
    //entrada
    const numero = input('Digite um numero: ')
    const separar = numero.split(".").map(Number)
    let int = separar[0]
    const decimal = separar[1]
    
    //processamento

    if (decimal >= 5){
        int = int + 1  
        console.log(int)
    }else{
        console.log(int)
    }

}

main()