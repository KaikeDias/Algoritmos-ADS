export function eh_par(valor){
    return valor % 2 === 0
}

export function numero_aleatorio(min = 0, max = 500){
    return Math.floor(Math.random() * (max - min)) + min
}

export function eh_multiplo(n1,n2){
    if(n1 % n2 === 0){
        return true
    }
}