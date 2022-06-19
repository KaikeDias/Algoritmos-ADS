import {input} from '../io_utils.js'

function main(){
    const A = Number(input('A: '))
    const B = Number(input('B: '))
    const C = Number(input('C: '))
    const D = Number(input('D: '))

    const soma = C + D
    const soma2 = A + B

    if (B>C && D>A && soma>soma2 && C>0 && D>0 && A%2==0){
        console.log('Valores aceitos')
    }else{
        console.log('valores nao aceitos')
    }


}
main()