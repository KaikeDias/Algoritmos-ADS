import {input} from './io_utils.js'

function main(){
    let par = 0
    let n1 = 1
    let n2 = 1
    let soma = 0
    let sequencia = ''

    while(n1 !== 0 || n2 !== 0){
        par = input('Par de numeros: ').split(' ').map(Number)
        n1 = par[0]
        n2 = par[1]
        
        if(n1 === 0 || n2 === 0){
            break
        }

        for(let small = menor(n1,n2); small <= maior(n1,n2); small++){
            soma += small
            sequencia += `${small} `
        }
        sequencia += `Sum=${soma}`
        console.log(sequencia)
        sequencia = ''
        soma = 0
    }

}

function maior(n1,n2){
    let maior_numero = 0
    if(n1 >= n2){
        maior_numero = n1
    }else{
        maior_numero = n2
    }
    return maior_numero
}

function menor(n1,n2){
    let menor_numero = 0
    if(n1 >= n2){
        menor_numero = n2
    }else{
        menor_numero = n1
    }
    return menor_numero
}


main()