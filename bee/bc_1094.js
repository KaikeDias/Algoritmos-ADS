import {input} from './io_utils.js'

function main(){
    //Entrada
    const casos = Number(input('Digite a quantidade de testes: '))

    //Saída
    experiencias(casos)

}

//Processamento
function experiencias(casos){
    let coelhos = 0
    let ratos = 0
    let sapos = 0
    let qtd_total = 0
    let cont = 0

    while(cont < casos){
        const experiencia = input('Digite a quantidade e o tipo de cobaia: ').split(' ')
        const qtd = Number(experiencia[0])
        const tipo = experiencia[1]
        if(tipo === 'C'){
            coelhos += qtd
        }else if(tipo === 'R'){
            ratos += qtd
        }else if(tipo === 'S'){
            sapos += qtd
        }
        qtd_total += qtd
        cont++
    }

    const percentC = (coelhos/qtd_total) * 100
    const percentR = (ratos/qtd_total) * 100
    const percentS = (sapos/qtd_total) * 100

    console.log(`Total: ${qtd_total}`)
    console.log(`Total de coelhos: ${coelhos}`)
    console.log(`Total de ratos: ${ratos}`)
    console.log(`Total de sapos: ${sapos}`)
    console.log(`Percentual de coelhos: ${percentC.toFixed(2)}`)
    console.log(`Percentual de ratos: ${percentR.toFixed(2)}`)
    console.log(`Percentual de sapos: ${percentS.toFixed(2)}`)
}


main()