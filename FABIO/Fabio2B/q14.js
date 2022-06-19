import {input} from './io_utils.js'

function main(){
    //Entrada
    const combustivel = input('Qual o combustivel: ')
    const litros = Number(input('Quantos litros: '))

    //Saída
    console.log(`Total = ${preco_combustivel(combustivel,litros)}`)

}

//Processamento
function preco_combustivel(combustivel,litros){
    let preco = 0

    if (combustivel === 'G'){
        if(litros <= 20){
            preco = (2.50 - (2.50 * 3/100) ) * litros
        }else{
            preco = (2.50 - (2.50 * 5/100)) * litros
        }
    }else if(combustivel === 'A'){
        if(litros <= 20){
            preco = (1.90 - (1.90 * 4/100)) * litros
        }else{
            preco = (1.90 - (1.90 * 6/100)) * litros
        }
    } 
    return preco
}


main()