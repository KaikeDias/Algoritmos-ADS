import {numero_aleatorio} from './utils.js'

export function new_matriz(qtd_linhas, qtd_colunas){
    const matriz = new Array(qtd_linhas)

    for(let i = 0; i < qtd_linhas; i++){
        matriz[i] = new Array(qtd_colunas)
    }

    return matriz
}

export const show_matriz = (matriz) => console.table(matriz)

export function preencher_matriz(matriz,valor_padrao){

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            matriz[i][j] = valor_padrao || numero_aleatorio()
        }
    }

    return matriz
}

export function transpor_matriz(matriz, N){
    const matriz_transposta = new_matriz(N,N)
    const linhas = matriz[0].length
    const colunas = matriz.length

    for(let i = 0; i < linhas; i++){
        for(let j = 0; j < colunas; j++){
            matriz_transposta[i][j] = matriz[j][i]
        }
    }

    return matriz_transposta
}

export function pos_maior_menor_matriz(matriz){
    let linha_maior = 0
    let coluna_maior = 0
    let linha_menor = 0
    let coluna_menor = 0

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(matriz[i][j] > matriz[linha_maior][coluna_maior]){
                linha_maior = i
                coluna_maior = j
            }else if(matriz[i][j] < matriz[linha_menor][coluna_menor]){
                linha_menor = i
                coluna_menor = j
            }
        }
    }

    return [linha_maior,coluna_maior,linha_menor,coluna_menor]
}

export function criar_matriz_identidade(N){
    const matriz_identidade = new_matriz(N,N)

    for(let i = 0; i < N; i++){
        for(let j = 0; j < N; j++){
            if(i === j){
                matriz_identidade[i][j] = 1
            }else{
                matriz_identidade[i][j] = 0
            }
        }
    }

    return matriz_identidade
}

export function linha_maior_menor_soma(matriz){
    let linha_maior, linha_menor
    let soma_maior = 0
    let soma_menor = 1000000000000000
    let soma 

    for(let i = 0; i < matriz[0].length; i++){
        soma = 0
        for(let j = 0; j < matriz.length; j++){
            soma += matriz[i][j]
        }
        if(soma > soma_maior){
            linha_maior = i
            soma_maior = soma
        }
        if(soma < soma_menor){
            linha_menor = i
            soma_menor = soma
        }
    }

    return [linha_maior,linha_menor]
}

export function soma_positivos_negativos_matriz(matriz){
    let positivos = 0
    let negativos = 0

    for(let i = 0; i < matriz[0].length; i++){
        for(let j = 0; j < matriz.length;j++){
            if(matriz[i][j] >= 0){
                positivos += matriz[i][j]
            }else{
                negativos += matriz[i][j]
            }
        }
    }

    return [positivos,negativos]
}

export function map_matriz(matriz,qtd_linhas,qtd_colunas, funcao){
    const nova_matriz = new_matriz(qtd_linhas,qtd_colunas) 

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            nova_matriz[i][j] = funcao(matriz[i][j])
        }
    }

    return nova_matriz
}

export function filter_matriz(matriz, condicao){
    const nova_matriz = new Array()
    let l

    for(let k = 0, i = 0; i < matriz.length; i++,k++){
        nova_matriz[k] = new Array()
        l = 0
        for(let j = 0; j < matriz[i].length; j++){
            if(condicao(matriz[i][j])){
                nova_matriz[k][l] = matriz[i][j]
                l++
            }
        }
    }

    return nova_matriz
}


export const acima_diagonal_principal = (i,j) => i < j
export const abaixo_diagonal_principal = (i,j) => i > j
export const acima_diagonal_secundaria = (i, j, ordem) => i + j < ordem - 1 
export const abaixo_diagonal_secundaria = (i, j, ordem) => i + j > ordem - 1 