import {input} from './io_utils.js'

function main(){
    //entrada
    const n1 = Number(input('Numero: '))
    const n2 = Number(input('Numero: '))
    const n3 = Number(input('Numero: '))
    const n4 = Number(input('Numero: '))
    const n5 = Number(input('Numero: '))

    //saida
    console.log(`${maior(n1,n2,n3,n4,n5)} é o maior`)
    console.log(`${menor(n1,n2,n3,n4,n5)} e o menor`)
}

function maior(n1,n2,n3,n4,n5){
    let maior = 0

    if (n1 > n2 && n1 > n3 && n1 > n4 && n1 > n5){
        maior = n1
    }else if(n2 > n1 && n2 > n3 && n2 > n4 && n2 > n5){
        maior = n2
    }else if (n3 > n1 && n3 > n2 && n3 > n4 && n3 > n5){
        maior = n3
    }else if (n4 > n1 && n4 > n2 && n4 > n3 && n4 > n5){
        maior = n4
    }else if (n5 > n1 && n5 > n2 && n5 > n3 && n5 > n4){
        maior = n5
    }

    return maior

}

function menor(n1,n2,n3,n4,n5){
    let menor = 0

    if(n1 < n2 && n1 < n3 && n1 < n4 && n1 < n5){
        menor = n1
    }else if(n2 < n1 && n2 < n3 && n2 < n4 && n2 < n5){
        menor = n2
    }else if(n3 < n1 && n3 < n2 && n3 < n4 && n3 < n5){
        menor = n3
    }else if(n4 < n1 && n4 < n2 && n4 < n3 && n4 < n5){
        menor = n4
    }else if(n5 < n1 && n5 < n2 && n5 < n3 && n5 < n4){
        menor = n5
    }

    return menor

}

main()