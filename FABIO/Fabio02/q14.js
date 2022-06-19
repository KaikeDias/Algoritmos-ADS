import {input} from './io_utils.js'

function main(){
    //entrada
    const n1 = Number(input('Numero: '))
    const n2 = Number(input('Numero: '))
    const n3 = Number(input('Numero: '))
    const n4 = Number(input('Numero: '))
    const n5 = Number(input('Numero: '))

    //saida
    console.log(`Media: ${media_dos_valores(n1,n2,n3,n4,n5)}`)

    if (n1 > media_dos_valores(n1,n2,n3,n4,n5)){
        console.log(n1)
    }
    if (n2 > media_dos_valores(n1,n2,n3,n4,n5)){
        console.log(n2)
    }
    if (n3 > media_dos_valores(n1,n2,n3,n4,n5)){
        console.log(n3)
    }
    if (n4 > media_dos_valores(n1,n2,n3,n4,n5)){
        console.log(n4)
    }
    if (n5 > media_dos_valores(n1,n2,n3,n4,n5)){
        console.log(n5)
    }
    
}

function media_dos_valores(n1,n2,n3,n4,n5){
    
    const media = (n1 + n2 + n3 + n4 + n5)/5

    return media

}


main()