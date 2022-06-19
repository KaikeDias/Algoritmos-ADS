import {input} from './io_utils.js'

function main(){
    //entrada
    const lado1 = Number(input('lado 1: '))
    const lado2 = Number(input('lado 2: '))
    const lado3 = Number(input('lado 3: '))

    //processamento
    let cat1 = 0
    let cat2 = 0 

    if (pitagoras(lado1,lado2,lado3) === lado1){
        cat1 = lado2
        cat2 = lado3
    }else if (pitagoras(lado1,lado2,lado3) === lado2){
        cat1 = lado1
        cat2 = lado3
    }else if (pitagoras(lado1,lado2,lado3) === lado3){
        cat1 = lado2
        cat2 = lado1
    }




    
    //saida
    console.log(`Hipotenusa: ${pitagoras(lado1,lado2,lado3)}`)
    console.log(`Catetos: ${cat1} ; ${cat2}  `)



}

function pitagoras(lado1,lado2,lado3){
    let hipo = 0

    if (lado1 * lado1 === (lado2*lado2 + lado3*lado3)){
        hipo = lado1
    }else if (lado2 * lado2 === (lado1*lado1 + lado3*lado3)){
        hipo = lado2
    }else if (lado3 * lado3 === (lado2*lado2 + lado1*lado1)){
        hipo = lado3
    }

    return hipo

}

main()