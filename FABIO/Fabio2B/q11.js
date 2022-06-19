import {input} from './io_utils.js'

function main(){
    //Entrada
    const numero = Number(input('Digite um numero menor que 1000: '))

    let centena = 0
    let dezena = 0
    let unidade = 0

    if(numero > 100){
        centena = Math.trunc(numero/100)
        const resto = numero % 100
        dezena = Math.trunc(resto/10)
        unidade = resto % 10
        console.log(`${numero} = ${centena} centena(s), ${dezena} dezena(s) e ${unidade} unidade(s)`)
    }else if(numero < 100){
        dezena = Math.trunc(numero/10)
        unidade = numero % 10
        console.log(`${numero} = ${dezena} dezena(s) e ${unidade} unidade(s)`)
    }else if(numero < 10){
        unidade = numero
        console.log(`${numero} = ${unidade} unidade(s)`)
    }
    //Eu ia fazer com as saídas trocando entre singular e plural de acordo com o numero correspondente, mas seriam 6 saídas possíveis no caso de um numero maior que 100, 4 em um numero maior que 10 e mais 2 em numeros menores que 10. Então para o codigo nao ficar muito grande e complicado eu deixei as saídas assim de maneira simplificada(pode haver um jeito mais simples do que o que eu pensei apesar de tudo, depois vou tentar pra ver se consigo)
}


main()