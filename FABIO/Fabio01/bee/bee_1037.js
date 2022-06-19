import {input} from '../io_utils.js'

function main(){
    //entrada
    const n1 = Number(input('Numero: '))

    //processamento
    if (n1>0 && n1<=25){
        console.log('Intervalo [0,25]')
    }else if(n1>25 && n1<=50){
        console.log('Intervalo (25,50]')
    }else if(n1>50 && n1<=75){
        console.log('Intervalo (50,75]')
    }else if(n1>75 && n1<=100){
        console.log('Intervalo (75,100]')
    }else{
        console.log('Fora de intervalo')
    }




}
main()