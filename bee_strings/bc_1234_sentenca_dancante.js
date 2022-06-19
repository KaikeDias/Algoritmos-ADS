import {input} from './io_utils.js'
// import fs from 'fs'
// var input = fs.readFileSync('sentenca.txt', 'utf8');
// var lines = input.split('\n');

function main(){
    let cont = 0
    let sentenca
    let sentenca_danc

    while(lines[cont] !== ''){
        sentenca = input('Sentença: ')
        //sentenca = lines[cont]
        sentenca_danc = sentenca_dancante(sentenca)

        console.log(sentenca_danc)
        cont++
    }

}

function sentenca_dancante(sentenca){
    let nova_sentenca = ''
    let maiusculo = 1
    let nova_letra

    for(let letra of sentenca){

        if(eh_letra(letra)){
            if(maiusculo === 1){
                nova_letra = letra.toUpperCase()
                maiusculo = 0
            }else{
                nova_letra = letra.toLowerCase()
                maiusculo = 1
            }

        }else{
            nova_letra = ' '
        }

        nova_sentenca += nova_letra
    }

    return nova_sentenca
}

function ASCII(caractere){
    return caractere.charCodeAt(0)
}

function eh_letra(caractere){
    let codigo = ASCII(caractere)
    return ((codigo >= 65 && codigo <= 90) || (codigo >= 97 && codigo <= 122)) 
}

main()