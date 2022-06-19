import {input} from './io_utils.js'

function main(){
    //entrada
    const n1 = Number(input('Numero de 2 digitos: '))

    //processamento 
    
    
    if (dezena(n1) === unidade(n1)){
        console.log('São iguais')
    }else{
        console.log('São diferentes')
    }


}

function dezena(A){
    const dez = Math.trunc(A / 10)

    return dez
}

function unidade(x){
    const uni = x % 10

    return uni
}


main()