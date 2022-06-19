import {input} from './io_utils.js'

function main(){
    //entrada
    const A = Number(input('A: '))
    const B = Number(input('B: '))
    const C = Number(input('C: '))

    //processamento
   
    
    //saida
    console.log(`Maior: ${maior(A,B,C)}`)
    

}

function maior(n1,n2,n3){
    if (n1 > n2 && n1 > n3){
        return n1
    }else if(n2 > n1 && n2 > n3){
        return n2
    }else if(n3 > n1 && n3 > n2){
        return n3
    }
}

main()