import{input,print} from './io_utils.js'

function main(){
    //entrada
    const celcius = Number(input('Digite a temperatura em graus celcius: ')) 

    //processamento
    const fahrenheit = (9 * celcius + 160) / 5
    
    //saida
    print(`A temperatura em graus fahrenheit é ${fahrenheit}°F`)
}
main()