import {input} from './io_utils.js'

function main(){
    const renda_mensal = Number(input('Renda mensal: '))
    const valor_emprestimo = Number(input('Valor do emprestimo: '))
    const prazo = Number(input('Numero de parcelas: '))

    if(parcelas_validas(prazo,renda_mensal,valor_emprestimo) && emprestimo_valido(valor_emprestimo)){
        console.log('Aprovado')
        console.log(`Valor do IOF: ${valor_iof(valor_emprestimo,prazo).toFixed(2)}`)
        console.log(`Valor dos juros: ${juros(prazo,valor_emprestimo).toFixed(2)}`)
        console.log(`Valor total: ${valor_total(prazo,valor_emprestimo).toFixed(2)}`)
        console.log(`Valor parcela = ${parcelas(prazo,valor_emprestimo).toFixed(2)}`)

    }else{
        console.log('Negado')
    }

}

function parcelas(prazo,valor_emprestimo){
    const valor_parcela = valor_total(prazo,valor_emprestimo)/prazo
    return valor_parcela

}

function parcelas_validas(prazo,renda,valor_emprestimo){
    const max = renda * 0.4
    if(prazo <= 24 && prazo >= 2 && parcelas(prazo,valor_emprestimo) <= max && parcelas(prazo,valor_emprestimo) < renda){
        return true
    }else{
        return false
    }
}

function emprestimo_valido(valor_emprestimo){
    return valor_emprestimo >= 1212
}

function valor_iof(valor_emprestimo,prazo){
    const valor_iof = valor_emprestimo * 0.0038
    const dias_iof = (prazo * 30) * 0.000082
    const valor_total = valor_iof + dias_iof

    return valor_total
}

function taxa_selic(prazo){
    const selic = 0.1275
    if(prazo <= 6){
        return selic * 0.5
    }else if(prazo > 6 && prazo <= 12){
        return selic * 0.75
    }else if(prazo > 12 && prazo <= 18){
        return selic
    }else if(prazo > 18){
        return selic * 1.3
    }
}

function juros(prazo,valor_emprestimo){
    const total_juros = (taxa_selic(prazo) * valor_emprestimo) + valor_iof(valor_emprestimo,prazo)
    return total_juros
}

function valor_total(prazo,valor_emprestimo){
    const total = juros(prazo,valor_emprestimo) + valor_emprestimo
    return total
}


main()