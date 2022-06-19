import {input} from './io_utils.js'

function main(){
    //Entrada
    const n1 = Number(input('Preço do produto 1: '))
    const n2 = Number(input('Preço do produto 2: '))
    const n3 = Number(input('Preço do produto 3: '))

    //Saída
    console.log(`O produto que deve ser comprado é o de R$${menor(n1,n2,n3)}`)

}


//Processamento
function menor(n1,n2,n3){
    let menor = 0
    if(n1 < n2 && n1 < n3){
        menor = n1
    }else if(n2 < n1 && n2 < n3){
        menor = n2
    }else if(n3 < n1 && n3 < n2){
        menor = n3
    }
    return menor
}

main()