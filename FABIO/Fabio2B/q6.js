import {input} from './io_utils.js'

function main(){
    //Entrada
    const turn = input('Em que turno o aluno estuda: ')

    //Saída
    console.log(turno(turn))
}


//Processamento
function turno(tn){
    if(tn === 'M'){
        return 'Bom Dia!'
    }else if(tn === 'V'){
        return 'Boa Tarde!'
    }else if(tn === 'N'){
        return 'Boa Noite!'
    }else{
        return 'Valor Inválido!'
    }
}

main()