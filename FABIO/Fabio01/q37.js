import{input,print} from './io_utils.js'

function main(){
    //entrada
    const idade = Number(input('digite a idade expressa em dias: '))

    //processamento
    const meses = idade / 30
    const anos = meses / 12
    
    //saida
    print(`A idade expressa em anos é ${anos} e em meses é ${meses}`)
}
main()