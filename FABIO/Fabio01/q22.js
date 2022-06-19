import{input,print} from './io_utils.js'

function main(){
    //entrada
    const km = Number(input('Digite a distancia em km: '))

    //processamento
    const metros = km * 1000

    //saida
    print(`O equivalente de ${km}km em metros é ${metros}m`)

}
main()