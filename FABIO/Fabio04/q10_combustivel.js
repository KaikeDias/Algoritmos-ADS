import {input} from './io_utils.js'

function main(){
    const qtd_containers = Number(input('Quantidade de containers: '))
    const peso_container = Number(input('Peso de cada container: '))

    let num_bilhete 
    let qtd_bagagem 
    let qtd_passageiros = 0
    let peso_passageiros = 0
    let peso_bagagem = 0

    while(num_bilhete !== 0){
        num_bilhete = Number(input('Numero do bilhete: '))
        
        if(num_bilhete === 0){
            break
        }

        if(num_bilhete !== 0){
            qtd_bagagem = Number(input('Quantidade de bagagem: '))
        }

        qtd_passageiros++
        peso_passageiros += 70
        peso_bagagem += qtd_bagagem * 10
    }

    const carga_passageiros = peso_passageiros + peso_bagagem
    const carga_containers = carga(qtd_containers,peso_container)
    const combustivel_litros = peso_combustivel(carga_passageiros,qtd_containers,peso_container)/1.5
    let decolagem
    if(combustivel_litros >= 10000){
        decolagem = 'Decolagem liberada'
    }else{
        decolagem = 'Decolagem não liberada'
    }
    
    console.log(`Quantidade de passageiros: ${qtd_passageiros}`)
    console.log(`Volume total de bagagem: ${peso_bagagem.toFixed(2)} kgs`)
    console.log(`Peso dos passageiros: ${peso_passageiros.toFixed(2)} kgs`)
    console.log(`Peso da carga: ${carga_containers.toFixed(2)} kgs`)
    console.log(`Quantidade possível de combustível: ${combustivel_litros.toFixed(2)} litros`)
    console.log(decolagem)




}

function peso_combustivel(carga_passageiros,qtd_containers,peso_container){
    const peso = 500000 - carga_passageiros - carga(qtd_containers,peso_container)
    return peso
}

function carga(qtd,peso){
    return qtd * peso
}

main()