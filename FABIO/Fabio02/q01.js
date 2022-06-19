import {input} from './io_utils.js'

function main(){
    //entrada
    const n1 = Number(input('Primeiro numero: '))
    const n2 = Number(input('Segundo numero: '))
    const n3 = Number(input('Terceiro numero: '))

    //processamento

    if (todos_iguais(n1,n2,n3)){
        console.log('Existem 3 numeros iguais')
    } else if (dois_iguais(n1,n2,n3)){
       console.log('Existem 2 numeros iguais') 
    }else{
        console.log('Não existem numeros iguais')
    }

}

function todos_iguais(numero1,numero2,numero3){
    if (numero1 === numero2 && numero2 === numero3){
        return true
    }
}

function dois_iguais(valor1,valor2,valor3){
    if (valor1 === valor2 || valor2 === valor3 || valor1 === valor3){
        return true
    }

}

main()