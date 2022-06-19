import {input} from './io_utils.js'

function main(){
    const combustivel = input('alcool ou gasolina: ')
    const distancia = Number(input('Distancia em km: '))

    if(combustivel === 'alcool' || combustivel === 'Alcool'){
        console.log(`Valor a pagar: ${alcool(distancia)}`)
    }else if(combustivel === 'gasolina' || combustivel === 'Gasolina'){
        console.log(`Valor a pagar: ${gasolina(distancia)}`)
    }

}

function alcool(distancia){
    const rendimento = Number(input('Rendimento com alcool em km/l: '))
    const preco = Number(input('Preço do alcool: '))  
    
    const valor = (distancia/rendimento) * preco
    
    return valor
}

function gasolina(distancia){
    const rendimento = Number(input('Rendimento com gasolina em km/l: '))
    const preco = Number(input('Preço do gasolina: '))  
    
    const valor = (distancia/rendimento) * preco
    
    return valor
}

main()