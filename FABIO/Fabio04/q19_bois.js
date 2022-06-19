import {input} from './io_utils.js'

function main(){
    let id = 1
    let peso = 0
    let maior = 0
    let id_maior = 0
    let menor = 100000000
    let id_menor = 0
    while(id !== 0){
        id = Number(input('Numero de identifição: '))
        if(id === 0){
            break
        }
        peso = Number(input('peso: '))

        if(peso > maior){
            maior = peso
            id_maior = id
        }else if(peso < menor){
            menor = peso
            id_menor = id
        }
    }

    console.log('---------- BOI MAIS GORDO ----------')
    console.log(`Numero de identificação: ${id_maior}`)
    console.log(`Peso: ${maior}`)
    console.log('---------- BOI MAIS MAGRO ----------')
    console.log(`Numero de identificação: ${id_menor}`)
    console.log(`Peso: ${menor}`)


}

main()