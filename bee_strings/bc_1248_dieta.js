//import {input} from './io_utils.js'
import fs from 'fs'
var input = fs.readFileSync('dieta.txt', 'utf8');
var lines = input.split('\n');


function main(){
    //const casos = Number(input('Quantidade de casos: '))
    const casos = lines[0]

    let dieta
    let cafe_da_manha   
    let almoco
    let janta
    let index = 1

    for(let i = 0; i < casos; i++){
        // dieta = input('Dieta: ')
        // cafe_da_manha = input('Cafe da manha: ')
        // almoco = input('Almoço: ')
        dieta = lines[index]
        index++
        cafe_da_manha = lines[index]
        index++
        almoco = lines[index]
        index++

        janta = jantar(dieta,cafe_da_manha,almoco)
        
        if(cheater(dieta,cafe_da_manha,almoco)){
            console.log('CHEATER')
        }else{
            console.log(janta)
        }
    }



    
}

function jantar(dieta,cafe_da_manha,almoco){
    let nao_consumido = ''

    for(let alimento of dieta){
        if(!contem_caractere(cafe_da_manha,alimento) && !contem_caractere(almoco,alimento)){
            nao_consumido += alimento
        }
    }

    return nao_consumido.split('').sort().join('')
}

function cheater(dieta,cafe_da_manha,almoco){
    const alimentacao = cafe_da_manha + almoco

    for(let alimento of alimentacao){
        if(!contem_caractere(dieta,alimento)){
            return true
        }
    }

    return false
}

function contem_caractere(texto, caractere){
    for(let i = 0; i < texto.length; i++){
        if(texto[i] === caractere){
            return true
        }
    }
    
    return false
}

main()