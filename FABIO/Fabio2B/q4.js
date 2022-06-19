import {input} from './io_utils.js'

function main(){
    //Entrada
    const n1 = Number(input('Nota 1: '))
    const n2 = Number(input('Nota 2: '))

    //Saída
    console.log(aprovado(n1,n2))

}

//Processamento
function media(n1,n2){
    return (n1+n2)/2
}

function aprovado(n1,n2){
    const med = media(n1,n2)
    if(med >= 7 && med < 10){
        return 'Aprovado'
    }else if(med < 7){
        return 'Reprovado'
    }else{
        return 'Aprovado com Distinção'
    }
}

main()