import {input} from './io_utils.js'

function main(){
    //entrada
    const numeros = input('Digite o codigo e a quantidade do item desejado: ').split(' ').map(Number)
    const item = numeros[0]
    const quantidade = numeros[1]


    //processamento
    

    console.log(`Total: R$ ${total(item,quantidade).toFixed(2)}`)
}

function total(item,quantidade){
    let total = 0

    if (item === 1){
        total = 4 * quantidade
    }else if(item === 2){
        total = 4.50 * quantidade
    }else if(item === 3){
        total = 5 * quantidade
    }else if(item === 4){
        total = 2 * quantidade
    }else if(item === 5){
        total = 1.5 * quantidade
    }
    return total
}



main()