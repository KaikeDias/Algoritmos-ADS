//Não fiz a função de entrada de numeros positivos ou negativos pois nao achei necessario ja que nao foi necessario

import prompt from 'prompt-sync'
import fs from 'fs'

export const input = prompt({
    sigint: false
})

export function input_number(numero){
   return Number(input(numero))
}

export function ler_vetor_de_arquivo(){
    const arquivo = input('Arquivo: ')
    const dados = fs.readFileSync(`${arquivo}.txt`, 'utf-8')
    const vetor = dados.split('\n').map(Number)
    
    return vetor
}

export function input_number_range(min,max){
    let repetir = true
    let numero

    while(repetir === true){
        numero = input_number('Digite um numero dentro da faixa: ')
        if(numero >= min && numero <= max){
            repetir = false
        }else{
            console.log('Numero invalido')
            repetir = true
        }
    }

    return numero
}