import {input} from './io_utils.js'

function main(){
    //entrada
    const angulo = Number(input('Digite o angulo: '))

    //processamento

    if(angulo <= 90){
        console.log('Esse angulo está no primeiro quadrante')
    }else if (angulo > 90 && angulo <= 180){
        console.log('Esse angulo está no segundo quadrante')
    }else if(angulo > 180 && angulo <= 270){
        console.log('Esse angulo está no terceiro quadrante')
    }else if(angulo > 270 && angulo <= 360){
        console.log('Esse angulo está no quarto quadrante')
    }else{
        console.log('Angulo inválido')
    }


}

main()