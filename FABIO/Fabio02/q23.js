import {input} from './io_utils.js'

function main(){
    //Entrada
    const data1 = input('Digite a primeira data (XX/XX/XXXX): ')
    const numeros = data1.split('/').map(Number)
    const dia1 = numeros[0]
    const mes1 = numeros[1]
    const ano1 = numeros[2]
    
    const data2 = input('Digite a segunda data (XX/XX/XXXX): ')
    const numeros2 = data2.split('/').map(Number)
    const dia2 = numeros2[0]
    const mes2 = numeros2[1]
    const ano2 = numeros2[2]

    //Saída
    console.log(data_mais_recente(dia1,mes1,ano1,dia2,mes2,ano2))
    
}

function data_mais_recente(dia1,mes1,ano1,dia2,mes2,ano2){
    
    
    if (ano1 > ano2){
        return 'A primeira data é a mais recente'
    }else if (ano2 > ano1){
        return 'A segunda data é a mais recente'
    }else{
        if (mes1 > mes2){
            return 'A primeira data é a mais recente'
        }else if (mes2 > mes1){
            return 'A segunda data é a mais recente'
        }else{
            if (dia1 > dia2){
                return 'A primeira data é a mais recente'
            }else if (dia2 > dia1){
                return 'A segunda data é a mais recente'
            }
        }
    }
}

main()