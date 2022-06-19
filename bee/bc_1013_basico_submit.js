import {input,print} from './io_utils.js'

function main(){
    //entrada
    const a = Number(input('a: '))
    const b = Number(input('b: '))
    const c = Number(input('c: '))
    
    //processamento
    const MaiorAB = (a+b+Math.abs(a-b))/2
    const maior = (MaiorAB+c+Math.abs(MaiorAB-c))/2
    
    //saida
    print(`${maior.toFixed(0)} eh o maior`)
}
main()