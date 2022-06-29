//import {input} from './io_utils.js'
import fs from 'fs'
var input = fs.readFileSync('cifra_de_cesar.txt', 'utf8');
var lines = input.split('\n');

function main(){
    //const casos = Number(input('Quantidade de casos: '))
    const casos = Number(lines[0])
    let index = 1

    for(let i = 0; i < casos; i++){
        //const texto = input('Texto: ')
        //const qtd_casas = Number(input('Quantas letras deseja pular: '))
        const texto = lines[index]
        index++
        const qtd_casas = Number(lines[index])
        index++

        const texto_decodificado = decodificar_texto(texto,qtd_casas)

        console.log(texto_decodificado)
    }
}

function decodificar_texto(texto,qtd_casas){
    let texto_decodificado = ''
    let elemento

    for(let i = 0; i < texto.length; i++){
        elemento = deslocar_elemento(texto[i],qtd_casas)

        texto_decodificado += elemento
    }

    return texto_decodificado
}

function deslocar_elemento(elemento,qtd_casas){
    const codigo_elemento = ASCII(elemento)
    let elemento_decodificado
    let deslocamento

    if(codigo_elemento - qtd_casas <= 64){
        deslocamento = 90 - (qtd_casas - (codigo_elemento - 64))

        elemento_decodificado = String.fromCharCode(deslocamento)
    }else{
        deslocamento = codigo_elemento - qtd_casas
        elemento_decodificado = String.fromCharCode(deslocamento)
    }
    
    return elemento_decodificado
}

function ASCII(caractere){
    return caractere.charCodeAt(0)
}

main()