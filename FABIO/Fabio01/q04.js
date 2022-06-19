import{print,input} from './io_utils.js'

function main(){
    //entrada
    const dolar = Number(input('Digite o valor em dolar: '))

    //processamento
    const real = dolar * 4.77 //quando fiz essa questão o dolar estava valendo 4.77, quando estiver corrigindo o valor provavelmente estará diferente

    //saida
    print(`${dolar} dolares equivalem a ${real} reais`)
}
main()