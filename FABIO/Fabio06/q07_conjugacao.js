import {input} from './io_utils.js'

function main(){
    const verbo = input('Verbo: ').split('er')

    const verbo_conjugado = conjugacao(verbo)

    console.log(verbo_conjugado)
}

function conjugacao(verbo){
    const radical = verbo[0]

    let verbo_conjugado = ` Eu ${radical}o`
    verbo_conjugado += `\n Tu ${radical}es`
    verbo_conjugado += `\n Ele/Ela ${radical}e`
    verbo_conjugado += `\n Nós ${radical}emos`
    verbo_conjugado += `\n Vós ${radical}eis`
    verbo_conjugado += `\n eles/elas ${radical}em`

    return verbo_conjugado
}

main()