export function novo_vetor(tamanho, valor_padrao){
    const vetor = new Array(tamanho).fill(valor_padrao)

    return vetor
}

export function inverter(vetor){
    const vetor_invertido = novo_vetor(vetor.length)

    let num = vetor.length-1 
    
    for(let i = 0; i < vetor.length; i++){
        vetor_invertido[i] = vetor[num]
        num--
    }

    return vetor_invertido
}

export function contem_repetidos(vetor){
    let elemento 
    let cont 
    for(let i = 0; i < vetor.length; i++){
        elemento = vetor[i]
        cont = contar_elemento(vetor, elemento)

        if(cont > 1){
            return true
        }
    }

    return false
}

export function contar_elemento(vetor, elemento){
    let cont = 0
    for(let i = 0; i < vetor.length; i++){
        if(elemento === vetor[i]){
            cont++
        }
    }

    return cont
}

export function juntar_vetores(vetor_a,vetor_b){
    const tamanho = vetor_a.length + vetor_b.length
    const vetor_c = novo_vetor(tamanho)
    
    let j = 0
    for(let i = 0; i < tamanho; i++){
        if(i < vetor_a.length){
            vetor_c[i] = vetor_a[i]
        }else{
            vetor_c[i] = vetor_b[j]
            j++
        }
    }

    return vetor_c
}

export function ordenar_vetor(vetor){
    let aux
    const vetor_crescente = novo_vetor(vetor.length)

    for(let i = 0; i < vetor.length; i++){
        for(let j = i+1; j < vetor.length; j++){
            if(vetor[i] > vetor[j]){
                aux = vetor[i]
                vetor[i] = vetor[j]
                vetor[j] = aux
            }
        }
    }

    for(let i = 0; i < vetor.length; i++){
        vetor_crescente[i] = vetor[i]
    }

    return vetor_crescente
}

export function fibonacci(vetor){
    const vetor_fibonacci = novo_vetor(vetor.length)

    for(let a = 0, b = 1, i = 0; i < vetor.length; b += a, a = b-a, i++){
        vetor_fibonacci[i] = a
    }

    return(vetor_fibonacci)
}

export function vetor_quadrado(vetor){
    const quadrado = novo_vetor(vetor.length)

    for(let i = 0; i < quadrado.length; i++){
        quadrado[i] = Math.pow(vetor[i], 2)
    }

    return quadrado
}

