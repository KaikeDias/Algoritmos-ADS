import {input} from './io_utils.js'

function main(){
    const fichas = Number(input('Numero de fichas: '))
    let id = ''
    let nome = ''
    let peso = 0
    let cont = 0
    let maior = 0
    let nome_maior = ''
    let id_maior = 0
    let menor = 100000000
    let nome_menor = ''
    let id_menor = 0
    while(cont < fichas){
        id = Number(input('Numero de identifição: '))
        nome = input('Nome: ')
        peso = Number(input('peso: '))

        if(peso > maior){
            maior = peso
            id_maior = id
            nome_maior = nome
        }
        if(peso < menor){
            menor = peso
            id_menor = id
            nome_menor = nome
        }

        cont++
    }

    console.log('---------- BOI MAIS GORDO ----------')
    console.log(`Numero de identificação: ${id_maior}`)
    console.log(`Nome: ${nome_maior}`)
    console.log(`Peso: ${maior}`)
    console.log('---------- BOI MAIS MAGRO ----------')
    console.log(`Numero de identificação: ${id_menor}`)
    console.log(`Nome: ${nome_menor}`)
    console.log(`Peso: ${menor}`)





}

main()