import prompt from 'prompt-sync'
import fs from 'fs'

export const input = prompt({
    sigint: false
})

//letra A
export function input_number(numero){
    let repetir = true
    let num

    while(repetir === true){
        num = Number(input(numero))
        if(isNaN(num)){
            console.log('Numero invalido')
            repetir = true
        }else{
            repetir = false
        }
    }

    return num
}

//letra B
export function numero_positivo(numero){
    let repetir = true
    let num

    while(repetir = true){
        num = Number(input_number(numero))
        if(num >= 0){ 
            repetir = false
        }else{
            console.log('Numero invalido')
            repetir = true
        }
    }

    return num
}

//letra C
export function numero_negativo(){
    let repetir = true
    let num

    while(repetir === true){
        num = Number(input('Digite um numero negativo: '))
        if(isNaN(num) && num < 0){ 
            repetir = false
        }else{
            console.log('Numero invalido')
            repetir = true
        }
    }

    return num
}

//letra D
export function numero_nao_nulo(){
    let repetir = true
    let num

    while(repetir === true){
        num = Number(input_number('Digite um numero nao nulo: '))
        if(num !== 0){ 
            repetir = false
        }else{
            console.log('Numero invalido')
            repetir = true
        }
    }

    return num
}

//letra E
export function numero_maior_min(min){
    let repetir = true
    let numero

    while(repetir === true){
        numero = input_number('Digite um numero dentro da faixa: ')
        if(numero >= min){
            repetir = false
        }else{
            console.log('Numero invalido')
            repetir = true
        }
    }

    return numero
}

//letra F
export function numero_menor_max(max){
    let repetir = true
    let numero

    while(repetir === true){
        numero = input_number('Digite um numero dentro da faixa: ')
        if(numero <= max){
            repetir = false
        }else{
            console.log('Numero invalido')
            repetir = true
        }
    }

    return numero
}

//letra G
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

//letra H
export function receber_texto(texto){
    let repetir = true
    let text

    while(repetir === true){
        text = input(texto)
        if(isNaN(text)){
            repetir = false
        }else{
            console.log('Valor invalido')
            repetir = true
        }
    }

    return text
}

//letra I
export function texto_maior_q_N(tamanho){
    let repetir = true
    let text

    while(repetir === true){
        text = receber_texto('Digite um texto de tamanho minimo N: ')
        if(text.length >= tamanho){
            repetir = false
        }else{
            console.log('Valor invalido')
            repetir = true
        }
    }

    return text
}

//letra J
export function texto_menor_q_N(tamanho){
    let repetir = true
    let text

    while(repetir === true){
        text = receber_texto('Digite um texto de tamanho maximo N: ')
        if(text.length <= tamanho){
            repetir = false
        }else{
            console.log('Valor invalido')
            repetir = true
        }
    }

    return text
}

//letra K
export function texto_entre_M_N(tamanho){
    let repetir = true
    let text

    while(repetir === true){
        text = receber_texto('Digite um texto entre M e N: ')
        if(text.length <= tamanho && text.length >= tamanho){
            repetir = false
        }else{
            console.log('Valor invalido')
            repetir = true
        }
    }

    return text
}

//letra L
export function texto_max_palavras(max){
    let repetir = true
    let text
    let palavras

    while(repetir === true){
        text = receber_texto('Digite um texto com maximo de N palavras: ')
        palavras = text.split(' ')

        if(palavras.length <= max){
            return false
        }else{
            console.log('Valor invalido')
            return true
        }
    }

}

//letra M
export function texto_min_palavras(min){
    let repetir = true
    let text
    let palavras

    while(repetir === true){
        text = receber_texto('Digite um texto com minimo de N palavras: ')
        palavras = text.split(' ')

        if(palavras.length >= min){
            return false
        }else{
            console.log('Valor invalido')
            return true
        }
    }

}

