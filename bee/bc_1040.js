import {input} from './io_utils.js'

function main(){
    const coordenadas = input('Digite as coordenadas x,y: ').split(' ').map(Number)
    const x = coordenadas[0]
    const y = coordenadas[1]
    if(x>0 && y>=0){
        console.log('Q1')
    }else if(x<0 && y>0){
        console.log('Q2')
    }else if(x<0 && y<0 ){
        console.log('Q3')
    }else if(x>0 && y<0){
        console.log('Q4')
    }else if(x === 0 && y === 0){
        console.log('Origem')
    }
    if(x===0 && y!==0){
        console.log('Eixo Y')
    }else if(x!==0 && y===0){
        console.log('Eixo X')
    }
}


main()