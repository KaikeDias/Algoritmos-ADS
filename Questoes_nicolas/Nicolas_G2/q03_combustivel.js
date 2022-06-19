import {input} from './io_utils.js'

function main(){
    const valor_inicial = Number(input('Valor inicial da gasolina: '))
    
    //Calculo dos valores iniciais dos componentes da gasolina
    const alcool = valor_inicial * 0.27
    const gasolina = valor_inicial * 0.73
    const petrobras_inicial = valor_inicial * 0.36
    const ICMS_inicial = valor_inicial * 0.27
    const entanol_inicial = valor_inicial * 0.13
    const impostos_inicial = valor_inicial * 0.10
    const revenda_inicial = valor_inicial * 0.14

    console.log(`-------Valores Iniciais-------`)
    console.log(`Petrobras: ${petrobras_inicial.toFixed(2)}`)
    console.log(`ICMS: ${ICMS_inicial.toFixed(2)}`)
    console.log(`Etanol_inicial: ${entanol_inicial.toFixed(2)}`)
    console.log(`Outros impostos: ${impostos_inicial.toFixed(2)}`)
    console.log(`Distribuição e revenda: ${revenda_inicial.toFixed(2)}`)
    console.log(`------------------------------`)

    //Calculo dos valores dos componentes após o reajuste
    const reajuste = Number(input('Reajuste em %: '))/100
    const gasolina_reajuste = gasolina + (gasolina * reajuste)
    const valor_final = gasolina_reajuste + alcool
    const petrobras_final = valor_final * 0.36
    const ICMS_final = valor_final * 0.27
    const entanol_final = valor_final * 0.13
    const impostos_final = valor_final * 0.10
    const revenda_final = valor_final * 0.14
    
    console.log(`-------Valores Finais-------`)
    console.log(`Valor final da gasolina: ${valor_final.toFixed(2)}`)
    console.log(`Petrobras: ${petrobras_final.toFixed(2)}`)
    console.log(`ICMS: ${ICMS_final.toFixed(2)}`)
    console.log(`Etanol_final: ${entanol_final.toFixed(2)}`)
    console.log(`Outros impostos: ${impostos_final.toFixed(2)}`)
    console.log(`Distribuição e revenda: ${revenda_final.toFixed(2)}`)
    console.log(`------------------------------`)
}

main()