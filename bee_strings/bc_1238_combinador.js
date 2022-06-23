//import {input} from './io_utils.js'
import fs from 'fs'
var input = fs.readFileSync('combinador.txt', 'utf8');
var lines = input.split('\n');

function main(){
    //const casos = Number(input('Numero de casos: '))
    const casos = Number(lines[0])
    let texto
    let texto_combinado

    for(let i = 1; i <= casos; i++){
        //texto = input('Texto: ').split(' ')
        texto = lines[i].split(' ')
        texto_combinado = alternar(texto)

        console.log(texto_combinado)
    }


}

function alternar(texto){
    const palavra1 = texto[0]
    const palavra2 = texto[1]
    const [maior_palavra, menor_palavra] = maior_menor(texto)
    const tamanho_maior = maior_palavra.length
    const tamanho_menor = menor_palavra.length
    const diferenca = tamanho_maior - tamanho_menor
    const tamanho = (tamanho_maior - diferenca) + tamanho_menor
    const inicio_ultimas_letras = tamanho_maior - diferenca
    let novo_texto = ''
    let j = 0
    let k = 0

    for(let i = 0; i < tamanho; i++){
        if(eh_par_nulo(i)){
            novo_texto += palavra1[j]
            j++
        }else{
            novo_texto += palavra2[k]
            k++
        }
    }

    for(let i = inicio_ultimas_letras; i < tamanho_maior; i++){
        novo_texto += maior_palavra[i]
    }

    return novo_texto

}

function maior_menor(texto){
    let tamanho1 = texto[0].length
    let tamanho2 = texto[1].length
    let maior,menor

    if(tamanho1 > tamanho2){
        maior = texto[0]
        menor = texto[1]
    }else{
        maior = texto[1]
        menor = texto[0]
    }

    return [maior,menor]
}

function eh_par_nulo(valor){
    if(valor % 2 === 0 || valor === 0){
        return true
    }

    return false
}

main()