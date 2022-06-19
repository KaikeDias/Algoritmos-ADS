import {input} from '../io_utils.js'

function main(){
    //entrada
    const A = Number(input('A: '))
    const B = Number(input('B: '))
    let maior = 0
    let menor = 0
    //processamento
    if (A>B){
        maior = A
        menor = B
    }else if(B>A){
        maior = B
        menor = A
    }
    if (maior % menor ===0){
        console.log('Sao multiplos')
    }else{
        console.log('Nao sao multiplos')
    }


}
main()