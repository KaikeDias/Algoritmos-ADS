import {input} from './io_utils.js'

function main(){
    const investimento = Number(input('Quanto deseja investir por mes: '))
    const taxa = Number(input('Taxa de juros (digite o numero correspondente ao percentual): '))
    
    const juros = taxa/100
    let continuar = 'S'
    let retorno = 0
    let anos = 0

    while(continuar !== 'N'){
        for(let meses = 0; meses < 12 ; meses++){
            retorno += retorno * juros + investimento   

        }

        anos++
        continuar = input('Deseja processar mais um ano (S/N) ? ')
    }

    console.log(`Saldo do investimento após ${anos} ano: ${retorno.toFixed(2)}`)


}

main()