import {input} from './io_utils.js'

function main(){
    //entrada
    const coord1 = input('Digite as coordenadas do ponto X (X,Y): ')
    const coord2 = input('Digite as coordenadas do ponto Y (X,Y): ')
    const valores1 = coord1.split(',').map(Number)
    const valores2 = coord2.split(',').map(Number)
    const x1 = coord1[0]
    const y1 = coord1[2]
    const x2 = coord2[0]
    const y2 = coord2[2]

    //Saída
    console.log(calculo(x1,y1,x2,y2))

}

function calculo(x1,y1,x2,y2){
    const base = x1 - x2
    const altura = y2 - y1
    let area = base * altura
    if (area < 0){
        area = area * -1
    }
    return area
}

main()