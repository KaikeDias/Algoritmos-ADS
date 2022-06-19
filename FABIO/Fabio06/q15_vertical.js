import {input} from './io_utils.js'

function main(){
    const palavra = input('Digite uma palavra de ate 20 caracteres: ')
    const tamanho = palavra.length

    palavra_vertical(palavra, tamanho)
}

function palavra_vertical(palavra, tamanho){
    let coluna = ''
    let saida = ''
    for(let i = 0; i < tamanho; i++){
        coluna += ' '
    }

    for(let i = 0; i < tamanho; i++){
        saida += coluna + palavra[i]
        console.log(saida)
        saida = ''
    }

}

main()