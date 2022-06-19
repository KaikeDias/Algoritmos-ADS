import {input} from './io_utils.js'

function main(){
    let cont = 1
    let valor 
    //let maior = input(`Valor ${cont}: `)
    let maior = Number(lines[0])
    let posicao_maior = 1

    
    while(cont < 10){
        cont++
        //valor = Number(input(`Valor ${cont}: `))
        valor = Number(lines[cont - 1])

        if(valor > maior){
            maior = valor
            posicao_maior = cont
        }

    }

    console.log(maior)
    console.log(posicao_maior)

}
main()