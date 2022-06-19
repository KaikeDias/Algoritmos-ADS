import {input} from './io_utils.js'

function main(){
    const cotacao = Number(input('Cotação do dolar: '))
    const qtd_dolares = Number(input('Quantos dolares deseja comprar: '))

    console.log(valor_a_pagar(cotacao,qtd_dolares).toFixed(2))

}

function valor_a_pagar(cotacao,quantidade){
    const valor = cotacao * quantidade
    const valor_taxado = valor + (valor * 0.011)
    return valor_taxado
}

main()