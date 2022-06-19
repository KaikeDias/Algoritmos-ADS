import {input} from './io_utils.js'

function main(){
    //entrada
    const numeros = input('Digite 4 numeros: ')
    const [A,B,C,D] = numeros.split(' ').map(Number)
    
    //saida
    if (valores(A,B,C,D)){
        console.log('Valores aceitos')
    }else{
        console.log('Valores nao aceitos')
    }

}

//processamento
function valores(A,B,C,D){
    const somaAB = A + B
    const somaCD = C + D
    if (B > C && D > A && somaCD > somaAB && C > 0 && D > 0 && A % 2 === 0){
        return true
    }else{
        return false
    }

}

main()