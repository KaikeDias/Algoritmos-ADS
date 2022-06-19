import {input} from './io_utils.js'

function main(){
    let nome = ''
    let altura
    let peso
    let gorda = 0
    let nome_gorda
    let magra = 10000
    let nome_magra
    let alta = 0
    let nome_alta
    let baixa = 1000
    let nome_baixa

    while(nome !== 'FIM'){
        nome = input('Nome: ')
        if(nome === 'FIM'){
            break
        }
        altura = Number(input('Altura: '))
        peso = Number(input('Peso: '))
        if(peso > gorda){
            gorda = peso
            nome_gorda = nome
        }
        if(peso < magra){
            magra = peso
            nome_magra = nome
        }
        if(altura > alta){
            alta = altura
            nome_alta = nome
        }
        if(altura < baixa){
            baixa = altura
            nome_baixa = nome
        }
    }

    console.log(`Candidata mais alta: ${nome_alta}, medindo ${alta}m`)
    console.log(`Candidata mais baixa: ${nome_baixa}, medindo ${baixa}m`)
    console.log(`Candidata mais gorda: ${nome_gorda}, pesando ${gorda}kg`)
    console.log(`Candidata mais magra: ${nome_magra}, pesando ${magra}kg`)

}

main()