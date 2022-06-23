//import {input} from './io_utils.js'
import fs from 'fs'
var input = fs.readFileSync('encaixa.txt', 'utf8');
var lines = input.split('\n');

function main(){
    //const casos = Number(input('Numero de casos: '))
    const casos = lines[0]
    let entrada


    for(let i = 1; i <= casos; i++){
        //entrada = input('Numeros: ')
        entrada = lines[i]

        if(encaixa(entrada)){
            console.log('encaixa')
        }else{
            console.log('nao encaixa')
        }
    }
}

function encaixa(entrada){
    const texto = entrada.split(' ')
    const primeiro = texto[0]
    const segundo = texto[1]
    const tamanho_primeiro = primeiro.length
    const pos_inicial = tamanho_primeiro - segundo.length 
    let novo_texto = ''

    for(let i = pos_inicial; i < tamanho_primeiro; i++){
        novo_texto += primeiro[i]
    } 

    if(novo_texto === segundo){
        return true
    }else{
        return false
    }
}

main()