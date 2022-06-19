export function caractere_valido(valor){
    return  (eh_letra(valor) || eh_espaço(valor) || eh_numero(valor))
}

function eh_letra(valor){
    return valor >= 97 && valor <= 122
}

function eh_espaço(valor){
    return valor === 32
}


function eh_numero(valor){
    return valor >= 48 && valor <= 57
}

export function eh_par(valor){
    return (valor % 2 === 0)
}
