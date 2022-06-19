import {input} from './io_utils.js'

function main(){
    const palavra = input('Nome: ')
    const tamanho = palavra.length

    palavra_diagonal(palavra, tamanho)
}

function palavra_diagonal(palavra, tamanho){
    let coluna = ''
    let saida = ''

    for(let i = 0; i < tamanho; i++){
        coluna += ' '
        saida += coluna + palavra[i]
        console.log(saida)
        saida = ''
    }

}

main()