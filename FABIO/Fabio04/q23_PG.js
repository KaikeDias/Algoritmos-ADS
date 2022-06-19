import {input} from './io_utils.js'

function main(){
    const n1 = Number(input('Primeiro numero: '))
    const razao = Number(input('Razão: '))
    const N = Number(input('N: '))
    
    let pg = n1
    let resultado = pg
    let saida = `${n1}`
    
    while(pg <= N){
        pg = resultado * razao
        resultado = pg
        saida += `, ${resultado}`
    }

    console.log(saida)

}

main()