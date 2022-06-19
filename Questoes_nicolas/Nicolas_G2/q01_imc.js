import {input} from './io_utils.js'

function main(){
    const peso = Number(input('Peso: '))
    const altura = Number(input('altura: '))

    let calorias_diarias
    if(!imc_normal(peso,altura)){
        console.log(`IMC: ${imc(peso,altura).toFixed(3)}`)
        if(imc(peso,altura) < 19.8){
            console.log(`Joaquim deve ganhar ${ganho(peso,altura).toFixed(3)} kg em 90 dias`)
        
            calorias_diarias = Number(input('Calorias diarias: '))
            const total_calorias = calorias_diarias * 90
            const superavit_calorico = ganho(peso,altura) * 7000

            const aumento_calorico_diario = superavit_calorico / 90
            console.log(`Voce devera aumentar sua dieta em ${aumento_calorico_diario.toFixed(2)} calorias`)

        }else if(imc(peso,altura) > 24.9){
            console.log(`Joaquim deve perder ${perda(peso,altura).toFixed(3)} kg em 90 dias`)

            calorias_diarias = Number(input('Calorias diarias: '))
            const deficit_calorico = perda(peso,altura) * 7000
            const deficit_diario = deficit_calorico / 23
            const sabados = deficit_diario / 2

            console.log(`Voce deverá gastar ${deficit_diario.toFixed(3)} calorias em dias uteis e ${sabados.toFixed(3)} calorias aos sabados`)
        }

    }else{
        console.log(`IMC: ${imc(peso,altura).toFixed(3)}`)
        console.log('Não precisa fazer alterações na dieta ou exercicios')
    }

}

function imc(peso,altura){
    return peso / altura**2
}

function imc_normal(peso,altura){
    if(imc(peso,altura) >= 19.8 && imc(peso,altura) <= 24.9){
        return true
    }else{
        return false
    }
}

function perda(peso,altura){
    const ideal = 24.9 * altura**2
    return peso - ideal
}

function ganho(peso,altura){
    const ideal = 19.8 * altura**2
    return ideal - peso
}





main()