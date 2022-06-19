import {input} from './io_utils.js'

function main(){
    //Entrada
    const letra = input('Sexo (F/M): ')

    //Saída
    console.log(sexo(letra))

}

//Processamento
function sexo(letra){
    if (letra === 'F' || letra === 'f'){
        return 'Feminino'
    }else if(letra === 'M' || letra === 'm'){
        return 'Masculino'
    }else{
        return 'Sexo inválido'
    }
}

main()