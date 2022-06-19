function ASCII(caractere){
    return caractere.charCodeAt(0)
}

function converter_ASCII_caractere(codigo){
    return String.fromCharCode(codigo)
}

export function contem_caractere(texto, caractere){
    for(let i = 0; i < texto.length; i++){
        if(texto[i] === caractere){
            return true
        }
    }
    
    return false
}

export function contar_caractere(texto, caractere){
    let cont = 0

    for(let i = 0; i < texto.length; i++){
        if(texto[i] === caractere){
            cont++
        }
    }

    return cont
}

export function eh_letra(caractere){
    let codigo = ASCII(caractere)

    return ((codigo >= 65 && codigo <= 90) || (codigo >= 97 && codigo <= 122)) 

}

export function deslocar_ASCII(caractere, pos){
    const codigo = ASCII(caractere)
    const novo_codigo = codigo + pos
    const novo_caractere = converter_ASCII_caractere(novo_codigo)

    return novo_caractere
}

export function inverter(texto){
    let novo_texto = ''
    
    for(let i = texto.length - 1; i >= 0; i--){
        novo_texto += texto[i]
    }

    return novo_texto
}

export function eh_vogal(letra){
    const vogais = 'aeiouAEIOU'

    for(let vogal of vogais){

        if(vogal === letra){
            return true
        }
    }
    return false

}

export function eh_consoante(letra){
    if(!eh_vogal(letra)){
        return true
    }else{
        return false
    }
}


export function eh_algarismo(numero){
    const algarismos = '0123456789'

    for(let algarismo of algarismos){
        if(algarismo === numero){
            return true
        }
    }

    return false
}