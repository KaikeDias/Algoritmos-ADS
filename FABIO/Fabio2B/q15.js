import {input} from './io_utils.js'

function main(){
    //Entrada
    const morangos = Number(input('Quantos kg de morangos: '))
    const macas = Number(input('Quantos kg de maçãs: '))
    
    //Processamento
    const peso_total = morangos + macas
    let preco_final = 0

    if(peso_total > 8 || preco(morangos,macas) === 25){
        preco_final = preco(morangos,macas) - (preco(morangos,macas)*10/100)
    }else{
        preco_final = preco(morangos,macas)
    }
    
    //Saída
    console.log(preco_final)

}

function preco_morangos(morangos){
    if(morangos <= 5){
        return 2.50
    }else{
        return 2.20
    }
}

function preco_macas(macas){
    if(macas <= 5){
        return 1.80
    }else{
        return 1.50
    }
}

function preco(morangos,macas){
    const calculo = (preco_morangos(morangos) * morangos) + (preco_macas(macas) * macas)
    return calculo
}

main()