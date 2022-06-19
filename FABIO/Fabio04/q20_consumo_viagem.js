import {input} from './io_utils.js'

function main(){
    const distancia_total = 600
    const tanque = 50
    let distancia = 0
    let litros = 0

    let distancia_percorrida = Number(input('Distancia percorrida: '))
    let litros_consumidos = Number(input('Consumo: '))
    distancia += distancia_percorrida
    litros += litros_consumidos

    while(distancia_total > distancia && tanque > litros){
        distancia_percorrida = Number(input('Distancia percorrida: '))
        litros_consumidos = Number(input('Consumo: '))
        distancia += distancia_percorrida
        litros += litros_consumidos
    }

    if(chegou(distancia,distancia_total,litros,tanque)){
        console.log('O carro chegou ao destino')
    }else{
        console.log('O combustível acabou antes de chegar')
    }

    const gasto = consumo(distancia,litros)

    console.log(`Consumo: ${gasto} KM/L`)

    
}

function chegou(distancia,distancia_total,litros,tanque){
    if(distancia >= distancia_total){
        return true
    }else if(litros >= tanque){
        return false
    }
}

function consumo(distancia,litros){
    return distancia / litros
}

main()