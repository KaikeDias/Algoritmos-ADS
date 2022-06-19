import{input,print} from './io_utils.js'

function main(){
    //entrada
    const fahrenheit = Number(input('Digite a temperatura em graus fahrenheit: ')) 

    //processamento
    const celcius = (5 * fahrenheit - 160) / 9
    
    //saida
    print(`A temperatura em graus celcius é ${celcius}°C`)
}
main()