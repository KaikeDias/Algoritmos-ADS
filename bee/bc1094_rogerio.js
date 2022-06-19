import {input} from "./io_utils.js"

function main(){
    let cont = 0
    //const alvo = Number(input('Quantos testes: '))
    const alvo = Number(lines[0])
    let qtd 
    let tipo
    let qtd_sapos = 0
    let perc_sapos
    let qtd_coelho = 0
    let perc_coelho
    let qtd_ratos = 0
    let perc_rato
    let qtd_total = 0
    let linha 

    while(cont < alvo){
        //pedir experimento
        //linha = input('QTD TIPO: ').split(' ')
        linha = lines[cont+1].split(' ')
        qtd = Number(linha[0])
        tipo = linha[1]

        if(eh_sapo(tipo)){
            qtd_sapos += qtd
        }else if(eh_coelho(tipo)){
            qtd_coelho += qtd
        }else{
            qtd_ratos += qtd
        }

        cont++
    }

    qtd_total = qtd_coelho + qtd_ratos + qtd_sapos
    perc_coelho = (qtd_coelho/qtd_total) * 100
    perc_sapos = (qtd_sapos/qtd_total) * 100
    perc_rato = (qtd_ratos/qtd_total) * 100

    console.log(`Total: ${qtd_total} cobaias`)
    console.log(`Total de coelhos: ${qtd_coelho}`)
    console.log(`Total de ratos: ${qtd_ratos}`)
    console.log(`Total de sapos: ${qtd_sapos}`)
    console.log(`Percentual de coelhos: ${perc_coelho.toFixed(2)} %`)
    console.log(`Percentual de ratos: ${perc_rato.toFixed(2)} %`)
    console.log(`Percentual de sapos: ${perc_sapos.toFixed(2)} %`)

}

function eh_sapo(tipo){
    return tipo === 'S'
}
function eh_coelho(tipo){
    return tipo === 'C'
}



main()