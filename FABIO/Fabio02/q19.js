import {input} from './io_utils.js'

function main(){
    //entrada
    const altura = Number(input('Altura em metros: '))
    const peso = Number(input('Peso em Kg: '))

    //processamento
    if (IMC(peso,altura) < 25){
        console.log('Peso normal')
    }else if(IMC(peso,altura) >= 25 && IMC(peso,altura) <= 30){
        console.log('Obeso')
    }else{
        console.log('Obesidade morbida')
    }

}

function IMC(valor1, valor2){
    const imc = valor1 / (valor2**2)
    return imc
}



main()