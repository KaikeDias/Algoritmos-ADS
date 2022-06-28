export function numero_aleatorio(min, max){
    return Math.floor(Math.random() * (max - min)) + min
}

export function novo_vetor(tamanho, valor_padrao){
    const vetor = new Array(tamanho).fill(valor_padrao)

    return vetor
}

export function preencher_vetor_aleatoriamente(vetor,min,max){
    for(let i = 0; i < vetor.length; i++){
        vetor[i] = numero_aleatorio(min,max)
    }

    return vetor
}

export function resetar_vetor(vetor,valor_padrao){
    for(let i = 0; i < vetor.length; i++){
        vetor[i] = valor_padrao
    }

    return vetor
}

export function maior_menor(vetor){
    let maior = vetor[0]
    let menor = vetor[0]
    let pos_maior,pos_menor

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] > maior){
            maior = vetor[i]
            pos_maior = i
        }else if(vetor[i] < menor){
            menor = vetor[i]
            pos_menor = i
        }
    }

    return [maior,menor,pos_maior,pos_menor]
}

export function media_valores_vetor(vetor){
    let cont = 0
    let soma = 0

    for(let i = 0; i < vetor.length; i++){
        soma += vetor[i]
        cont++
    }

    const media = soma/cont

    return media
}

export function somatorio_valores_vetor(vetor){
    let soma = 0

    for(let i = 0; i < vetor.length; i++){
        soma += vetor[i]
    }

    return soma
}

export function positivos_e_qtd(vetor){
    const positivos = []
    let qtd = 0

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] > 0){
            positivos[qtd] = vetor[i]
            qtd++
        }
    }

    return [positivos,qtd]
}

export function negativos_e_qtd(vetor){
    const negativos = []
    let qtd = 0

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] < 0){
            negativos[qtd] = vetor[i]
            qtd++
        }
    }

    return [negativos,qtd]
}

export function multiplicar_vetor(vetor,valor){
    const vetor_atualizado = novo_vetor(vetor.length)

    for(let i = 0; i < vetor.length; i++){
        vetor_atualizado[i] = vetor[i] * valor
    }

    return vetor_atualizado
}

export function elevar_valores_vetor(vetor, valor){
    const vetor_atualizado = novo_vetor(vetor.length)

    for(let i = 0; i < vetor.length; i++){
        vetor_atualizado[i] = vetor[i] ** valor
    }

    return vetor_atualizado
}

export function reduzir_a_fracao(vetor,valor){
    const vetor_atualizado = novo_vetor(vetor.length)

    for(let i = 0; i < vetor.length; i++){
        vetor_atualizado[i] = vetor[i] / valor
    }

    return vetor_atualizado
}

export function substituir_valores_negativos(vetor,min,max){
    const vetor_atualizado = novo_vetor(vetor.length)

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] < 0){
            vetor_atualizado[i] = numero_aleatorio(min,max)
        }else{
            vetor_atualizado[i] = vetor[i]
        }
    }

    return vetor_atualizado
}

export function inverter_vetor(vetor){
    const vetor_atualizado = novo_vetor(vetor.length)
    let j = 0

    for(let i = vetor.length-1; i >= 0; i--){
        vetor_atualizado[j] = vetor[i]
        j++
    }

    return vetor_atualizado
}

export function adicionar_elementos(vetor,qtd_valores){
    const vetor_novo = novo_vetor(vetor.length+qtd_valores)
    let elemento
    
    for(let cont  = 0; cont < vetor_novo.length; cont++){
        if(cont > vetor.length-1){
            elemento = Number(input('Novo valor: '))
            vetor_novo[cont] = elemento
        }else{
            vetor_novo[cont] = vetor[cont]
        }
    }

    return vetor_novo
}

export function remover_por_valor(vetor,valor){
    const vetor_novo = []
    let j = 0

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] !== valor){
            vetor_novo[j] = vetor[i]
            j++
        }
    }

    return vetor_novo
}

export function remover_por_posicao(vetor,posicao){
    const vetor_novo = novo_vetor(vetor.length-1)
    let j = 0

    for(let i = 0; i < vetor.length; i++){
        if(i !== posicao){
            vetor_novo[j] = vetor[i]
            j++
        }
    }

    return vetor_novo
}

export function editar_por_posicao(vetor,posicao,valor_novo){
    const vetor_novo = novo_vetor(vetor.length)

    for(let i = 0; i < vetor.length; i++){
        if(i === posicao){
            vetor_novo[i] = valor_novo
        }else{
            vetor_novo[i] = vetor[i]
        }
    }

    return vetor_novo
}

export function embaralhar_vetor(vetor){
    const min = 0
    const max = vetor.length-1
    let aux 
    let j 

    for(let i = 0; i < vetor.length; i++){
        j = numero_aleatorio(min,max)
        aux = vetor[i]
        vetor[i] = vetor[j]
        vetor[j] = aux
    }

    return vetor
}