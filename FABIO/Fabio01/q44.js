import{input,print} from './io_utils.js'

function main(){
    //entrada
    const latao = Number(input('Digite a massa do latão em kg: '))

    //processamento
    const cobre = latao * 0.70
    const zinco = latao * 0.30

    //saida
    print(`Em ${latao}kg de latão existe ${cobre.toFixed(2)}kg de cobre e ${zinco.toFixed(2)}kg de zinco.`)
    

}
main()