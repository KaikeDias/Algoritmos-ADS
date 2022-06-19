import {input} from './io_utils.js'

function main(){
    const vetor_par = new Array(5)
    const vetor_impar = new Array(5)
    let numero
    let i = 0
    let p = 0

    for(let num = 0; num < 15; num++){
        numero = Number(input('Numero: '))
        if(eh_par(numero)){
            vetor_par[p] = numero
            p++
            
        }else{
            vetor_impar[i] = numero
            i++
            
        }

        if(p === 5){
            for(let j = 0; j < vetor_par.length; j++){
                console.log(`par[${j}] = ${vetor_par[j]}`)
            }
            p = 0
        }

        if(i === 5){
            for(let j = 0; j < vetor_impar.length; j++){
                console.log(`impar[${j}] = ${vetor_impar[j]}`)
            }
            i = 0
        }
    }
    
    for(let index = 0; index < i; index++){
        console.log(`impar[${index}] = ${vetor_impar[index]}`)
    }
    
    for(let index = 0; index < p; index++){
        console.log(`par[${index}] = ${vetor_par[index]}`)
    }
}

function eh_par(valor){
    return valor % 2 === 0
}

main()