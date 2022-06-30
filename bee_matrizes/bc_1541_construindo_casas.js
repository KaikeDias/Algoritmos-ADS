//import {input} from './io_utils.js'
import fs from 'fs'
var input = fs.readFileSync('construindo_casas.txt', 'utf8');
var lines = input.split('\n');

function main(){
    //let [l,c, percentual] = input('Entrada: ').split(' ').map(Number)
    let [l,c, percentual] = lines[0].split(' ').map(Number)
    let index = 1
    let lado_terreno

    while(l !== 0){
        lado_terreno = lado_do_terreno(l,c,percentual)

        console.log(lado_terreno);

        //[l,c, percentual] = input('Entrada: ').split(' ').map(Number)
        [l,c, percentual] = lines[index].split(' ').map(Number)
        index++
    }

}

const area_terreno = (l,c,percentual) => ((l * c) / percentual) * 100

const lado_do_terreno = (l,c,percentual) => Math.trunc(Math.sqrt(area_terreno(l,c,percentual)))

main()