import {input} from './io_utils.js'

function main(){
    //entrada
    const data = input('Digite uma data (XX/XX/XXXX): ')
    const numeros = data.split('/').map(Number)
    const dia = numeros[0]
    const mes = numeros[1]
    const ano = numeros[2]

    //saída
    if(valida(dia,mes,ano)){
        console.log('Válida')
    }else{
        console.log('Inválida')
    }


}

function valida(dia,mes,ano){
    let valida = false
    if (mes === 1 || mes === 3 || mes === 5 || mes === 8 || mes === 10|| mes === 12){
        if(dia <= 31){
            valida = true
        }
    }
    if (mes === 4 || mes === 6 || mes === 7 || mes === 9 || mes === 11){
        if(dia <= 30){
            valida = true
        }
    }
    if (mes === 2){
        if (ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0){
            if (dia <= 29){
                valida =  true
            }
        
        }
        if (dia <= 28){
            valida = true
        }
    }

    return valida

}

main()