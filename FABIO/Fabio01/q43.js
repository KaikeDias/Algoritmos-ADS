import{input,print} from './io_utils.js'

function main(){
    //entrada
    const a = Number(input('Digite o valor de a: '))
    const b = Number(input('Digite o valor de b: '))
    const c = Number(input('Digite o valor de c: '))
    const d = Number(input('Digite o valor de d: '))
    const e = Number(input('Digite o valor de e: '))
    const f = Number(input('Digite o valor de f: '))

    //processamento
    const x = (c*e-b*f)/(a*e-b*d)
    const y = (a*f-c*d)/(a*e-b*d)

    //saida
    print(`Os valores de x e y respectivamente: ${x} ${y}`)
}
main()