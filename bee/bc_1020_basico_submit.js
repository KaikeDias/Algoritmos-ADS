import {input,print} from './io_utils.js'

function main(){
    //entrada
    const idade = Number(input('idade em dias: '))
    
    //processamento
    const anos = Math.trunc(idade/365)
    const resto = idade % 365
    const meses = Math.trunc(resto/30)
    const dias = resto % 30
    
    //saida
    print(`${anos} ano(s)`)
    print(`${meses} mes(es)`)
    print(`${dias} dia(s)`)
    
    
    
    
}
main()