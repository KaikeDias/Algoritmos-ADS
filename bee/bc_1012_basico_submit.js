import {input,print} from './io_utils.js'

function main(){
    //entrada
    const A = Number(input('A: '))
    const B = Number(input('B: '))
    const C = Number(input('C: '))
    
    //processamento
    const triangulo = (A*C)/2
    const circulo = C**2 * 3.14159
    const trapezio = (A+B)*C/2
    const quadrado = B**2
    const retangulo = A * B
    
    //saida
    print(`TRIANGULO: ${triangulo.toFixed(3)}`)
    print(`CIRCULO: ${circulo.toFixed(3)}`)
    print(`TRAPEZIO: ${trapezio.toFixed(3)}`)
    print(`QUADRADO: ${quadrado.toFixed(3)}`)
    print(`RETANGULO: ${retangulo.toFixed(3)}`)
}
main()