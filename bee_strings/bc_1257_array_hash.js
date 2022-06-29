//import {input} from './io_utils.js'
import fs from 'fs'
var input = fs.readFileSync('array_hash.txt', 'utf8');
var lines = input.split('\n');

function main(){
    //const casos = Number(input('Quantidade de casos: ')) 
    let qtd_linhas,linha,linhas,soma 
    let index = 1

    const casos = Number(lines[0])

    for(let i = 0; i < casos; i++){
        linhas = ''
        //qtd_linhas = Number(input('Quantidade de linhas: '))
        qtd_linhas = Number(lines[index])
        index++
        for(let cont = 0; cont < qtd_linhas; cont++){
            //linha = input('Linha: ')
            linha = lines[index]
            index++
            if(cont === 0){
                linhas += linha
            }else{
                linhas += `;${linha}`
            }
        }
    
        soma = hash(linhas)
        console.log(soma)
    }
    
}

function hash(linhas){
    const linha = linhas.split(';')
    let pos_alfabeto
    let palavra
    let soma = 0 //(Posição no alfabeto) + (Elemento de entrada) + (Posição do elemento)

    for(let i = 0; i < linha.length; i++){
        palavra = linha[i].split('')
        for(let j = 0; j < palavra.length; j++){
            pos_alfabeto = posicao_alfabeto(palavra[j])
            soma += pos_alfabeto //Posicao no alfabeto  
            soma += i //Elemento de entrada
            soma += j //Posição do elemento
        }
    }

    return soma
}

function posicao_alfabeto(elemento){
    const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let posicao

    for(let i = 0; i < alfabeto.length; i++){
        if(alfabeto[i] === elemento){
            posicao = i
        }
    }

    return posicao
}

main()