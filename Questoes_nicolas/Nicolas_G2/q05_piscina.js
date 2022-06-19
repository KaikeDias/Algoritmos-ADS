import {input} from './io_utils.js'

function main(){
    const largura = Number(input('Largura em cm: '))
    const comprimento = Number(input('Comprimento em cm: '))
    const profundidade = Number(input('Profundidade em cm: '))
    const valor_litros = Number(input('Valor pago para 1000 litros: '))

    const capacidade = max(largura,comprimento,profundidade)

    const pagar = gasto_piscina(capacidade) * valor_litros
    const pagar_mensalmente = gasto_mensal(capacidade) * valor_litros

    console.log(`Capacidade recomendavel ${capacidade} litros`)
    console.log(`Você gastará R$${pagar} para encher a piscina`)
    console.log(`Você terà que gastar R$${pagar_mensalmente} mensalmente para manter a piscina no volume ideal`)

}

function gasto_piscina(capacidade){
    const resto = capacidade % 1000
    let pagar = Math.trunc(capacidade / 1000)
    

    if(resto > 0){
        pagar++
    }

    return pagar
}

function gasto_mensal(capacidade){
    const gasto = capacidade * 0.1
    let pagar = Math.trunc(gasto / 1000)
    const resto = pagar % 1000


    if(resto > 0){
        pagar++
    }

    return pagar
}

function max(largura,comprimento,profundidade){
    const capacidade = volume(largura,comprimento,profundidade) * 0.85

    return capacidade
}   

function volume(largura,comprimento,profundidade){
    const vol = (largura * comprimento * profundidade) / 1000

    return vol
}

main()