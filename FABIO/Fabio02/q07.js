import {input} from './io_utils.js'

function main(){
    //entrada
    const lado1 = Number(input('lado 1: '))
    const lado2 = Number(input('lado 2: '))
    const lado3 = Number(input('lado 3: '))

    //processamento
    if (forma_triangulo(lado1, lado2, lado3)){
        const tipo_triangulo = tipo(lado1,lado2,lado3)
        console.log(tipo_triangulo)

    }else{
        console.log('Nao forma um triangulo')
    }
    
}

function forma_triangulo(n1,n2,n3){
    const soma = n1+n2 > n3 && n2 + n3 > n1 && n1+n3 > n2
    return soma
}

function equilatero(n1,n2,n3){
    return forma_triangulo(n1,n2,n3) && n1 === n2 && n2 === n3
}

function isoceles(n1,n2,n3){
    return forma_triangulo(n1,n2,n3) && n1 === n2 || n2 === n3 || n1 === n3
}

function tipo(n1,n2,n3){
    if(equilatero(n1,n2,n3)){
        return 'triangulo equilatero'
    }else if(isoceles(n1,n2,n3)){
        return 'triangulo isoceles'
    }else{
        return 'triangulo escaleno'
    }
}

main()