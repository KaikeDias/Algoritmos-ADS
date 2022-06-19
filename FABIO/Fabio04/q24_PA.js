import {input} from './io_utils.js'

function main(){
    const numero = Number(input('Numero: '))
    const razao = Number(input('Razão: '))
    const N = Number(input('N: '))

    let n = 0
    let pa = 0
    let resultado = `${numero}`

    while (pa < N){
        n += numero
        pa = n + razao
        resultado += `, ${pa}`
    }

    console.log(resultado)
}

main()