//import {input} from './io_utils.js'
import fs from 'fs'
var input = fs.readFileSync('justificador_II.txt', 'utf8');
var lines = input.split('\n');

function main(){
    let index = 1
    //let num_textos = Number(input('Numero de palavras: '))
    let num_textos = Number(lines[0])
    let texto
    let texto_formatado
    let textos 
    let tamanho_maior
    let espacos
    let frase_com_espacos
    let contador = 0

    while(num_textos !== 0){
        textos = []
        for(let i = 0; i < num_textos; i++){
            //texto = input('Texto: ').split(' ')
            texto = lines[index].split(' ')
            index++
            texto_formatado = formatar_texto(texto)
            textos[i] = texto_formatado
        }
    
        tamanho_maior = get_tamanho_maior(textos)
        
        if(contador !== 0){
            console.log('')
        }
        
        for(let frase of textos){
            espacos = tamanho_maior - frase.length
            frase_com_espacos = adicionar_espacos(frase, espacos)
            console.log(frase_com_espacos)
        }

        //num_textos = Number(input('Numero de palavras: '))
        num_textos = Number(lines[index])
        index++
        contador++
    }

}

function adicionar_espacos(texto, espacos){
    let novo_texto = ''

    for(let i = 0; i < espacos; i++){
        novo_texto += ' '
    }

    novo_texto += texto

    return novo_texto
}

function formatar_texto(texto){
    const texto_formatado = []
    let index = 0

    for(let i = 0; i < texto.length; i++){
        if(texto[i] !== ''){
            texto_formatado[index] = texto[i]
            index++
        }
    }

    return texto_formatado.join(' ')
}

function get_tamanho_maior(textos){
    let maior = 0

    for(let texto of textos){
        if(texto.length > maior){
            maior = texto.length
        }
    }

    return maior
}

main()