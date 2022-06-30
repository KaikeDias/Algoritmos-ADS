//import {input} from './io_utils.js'
import fs from 'fs'
var input = fs.readFileSync('dama.txt', 'utf8');
var lines = input.split('\n');

function main(){
    //let [x1,y1,x2,y2] = input('Entrada: ').split(' ').map(Number)
    let [x1,y1,x2,y2] = lines[0].split(' ').map(Number)
    let soma = x1+y1+x2+y2
    let index = 1

    while(soma !== 0){
        if(mesma_casa(x1,y1,x2,y2)){
            console.log(0)
        }else if(mesma_coluna(x1,x2) || mesma_linha(y1,y2) || mesma_diagonal(x1,y1,x2,y2)){
            console.log(1)
        }else{
            console.log(2)
        }

        //[x1,y1,x2,y2] = input('Entrada: ').split(' ').map(Number)
        [x1,y1,x2,y2] = lines[index].split(' ').map(Number)
        soma = x1+y1+x2+y2

        index++
    }

}

const mesma_casa = (x1,y1,x2,y2) => x1 === x2 && y1 === y2

const mesma_coluna = (x1,x2) => x1 === x2

const mesma_linha = (y1,y2) => y1 === y2

const mesma_diagonal = (x1,y1,x2,y2) => x1 + y1 === x2 + y2 || x1 - y1 === x2 - y2

main()