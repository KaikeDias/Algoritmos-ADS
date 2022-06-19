import{input,print} from './io_utils.js'

function main(){
    //entrada
    const metros = Number(input('Digite a distancia em metros: '))

    //processamento
    const km = metros / 1000

    //saida
    print(`${metros} metros equivalem a ${km} km`)

}
main()