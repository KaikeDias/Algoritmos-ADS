import fs from 'fs'
var input = fs.readFileSync('despertar_da_forca.txt', 'utf8');
var lines = input.split('\n');

function main(){
    let matriz = new Array()

    for(let i = 1; i < lines.length; i++){
        matriz[matriz.length] = lines[i].split(' ').map(Number)
    }

    const [coluna,linha] = verificar_matriz(matriz)

    console.log(`${coluna} ${linha}`)
}

function verificar_matriz(matriz){
    let linha
    let coluna
    let valor

    for(let i = 1; i < matriz.length -1; i++){
        for(let j = 1; j < matriz[i].length -1; j++){
            valor = matriz[i][j]
            if(valor === 42 && verificar_vizinhos(matriz,i,j)){
                linha = j+1
                coluna = i+1
                return [coluna,linha]
            }
        }
    }
    return [0,0]

}

function verificar_vizinhos(matriz,i,j){
    const diagonal_cima_esquerda = matriz[i-1][j-1]
    const cima = matriz[i-1][j]
    const diagonal_cima_direita = matriz[i-1][j+1]
    // const elemento = matriz[i][j]
    const esquerda = matriz[i][j-1]
    const direita = matriz[i][j+1]
    const diagonal_baixo_esquerda = matriz[i+1][j-1]
    const baixo = matriz[i+1][j]
    const diagonal_baixo_direita = matriz[i+1][j+1]

    if(esquerda === 7 && direita === 7 && diagonal_cima_esquerda === 7 && diagonal_baixo_esquerda === 7 && diagonal_cima_direita === 7 && diagonal_baixo_direita === 7 && cima === 7 && baixo === 7){
        return true
    } else {
        return false
    }

}

main()