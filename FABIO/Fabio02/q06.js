import {input} from './io_utils.js'

function main(){
    //entrada
    const angulo1 = Number(input('Angulo 1: '))
    const angulo2 = Number(input('Angulo 2: '))
    const angulo3 = Number(input('Angulo 3: '))

    //processamento
    if (forma_triangulo(angulo1,angulo2,angulo3)){
        const tipo_triangulo = tipo(angulo1,angulo2,angulo3)
        console.log(tipo_triangulo)

    }else{
        console.log('Nao forma um triangulo')
    }



}

function forma_triangulo(a1,a2,a3){
    if (a1 === 0 || a2 === 0 || a3 === 0){
        return false
    }
    
    return a1 + a2 + a3 === 180
    
}

function acutangulo(a1,a2,a3){
    return forma_triangulo(a1,a2,a3) && a1 < 90 && a2 < 90 && a3 < 90
}

function obtusangulo(a1,a2,a3){
    return forma_triangulo(a1,a2,a3) && a1 > 90 || a2 > 90 || a3 > 90
}

function retangulo(a1,a2,a3){
    return forma_triangulo(a1,a2,a3) && a1 === 90 || a2 === 90 || a3 === 90
}

function tipo(a1,a2,a3){
    if(acutangulo(a1,a2,a3)){
        return 'triangulo acutangulo'
    }else if(obtusangulo(a1,a2,a3)){
        return 'triangulo obtusangulo'
    }else if(retangulo){
        return 'Triangulo retangulo'
    }
}


main()