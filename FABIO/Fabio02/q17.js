import {input} from './io_utils.js'

function main(){
    //entrada
    const n1 = Number(input('Primeiro valor: '))
    const n2 = Number(input('Segundo valor: '))

    //saida
    if (resto(n1,n2) === 1){
        console.log(`soma das variaveis mais o resto: ${soma_resto(n1,n2)}`)

    }else if (resto(n1,n2) === 2){
        
        if (eh_par1(n1)){
            console.log(`${n1} é par`)
        }else{
            console.log(`${n1} é impar`)
        }

        if (eh_par2(n2)){
            console.log(`${n2} é par`)
        }else{
            console.log(`${n2} é impar`)
        }

    }else if(resto(n1,n2) === 3){
        console.log(`A multiplicação da soma dos valores pelo primeiro valor é: ${multiplicacao(n1,n2)}`)
        
    }else if(resto(n1,n2) === 4){
        console.log(`A divisão da soma dos valores pelo segundo valor é: ${divisao(n1,n2)}`)

    }else{
        console.log(`O quadrado de n1 é ${quadrado_n1(n1)} e o quadrado de n2 é ${quadrado_n2(n2)}`)
    }


}

function resto(valor1,valor2){
    const resto = valor1 % valor2
    return resto

}
function soma_resto(n1,n2){
    const soma = n1 + n2 + resto(n1,n2)
    return soma
}

function eh_par1(n1){
    if (n1 % 2 === 0){
        return true
    }else{
        return false
    }

}

function eh_par2(n2){
    if (n2 % 2 === 0){
        return true
    }else{
        return false
    }

}

function multiplicacao(n1,n2){
    const multiplicacao = (n1 + n2) * n1
    return multiplicacao
}

function divisao(n1,n2){
    const divisao = (n1 + n2)/n2
    return divisao
}

function quadrado_n1(n1){
    const quadrado = n1**2
    return quadrado
}

function quadrado_n2(n2){
    const quadrado = n2**2
    return quadrado
}

main()