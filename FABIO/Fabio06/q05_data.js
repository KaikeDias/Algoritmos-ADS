import {input} from './io_utils.js'

function main(){
    const data = input('Data (dd/mm/aaaa): ').split('/').map(Number)
    const dia = data[0]
    const mes = data[1]
    const ano = data[2]

    const mes_nomeado = nome_mes(mes)

    console.log(`Dia ${dia} de ${mes_nomeado} de ${ano}`)

}

function nome_mes(mes){
    if(mes === 1){
        return 'janeiro'
    }else if(mes === 2){
        return 'fevereiro'
    }else if(mes === 3){
        return 'março'
    }else if(mes === 4){
        return 'abril'
    }else if(mes === 5){
        return 'maio'
    }else if(mes === 6){
        return 'junho'
    }else if(mes === 7){
        return 'julho'
    }else if(mes === 8){
        return 'agosto'
    }else if(mes === 9){
        return 'setembro'
    }else if(mes === 10){
        return 'outubro'
    }else if(mes === 11){
        return 'novembro'
    }else if(mes === 12){
        return 'dezembro'
    }

}

main()