import {input} from './io_utils.js'

function main(){
    let index = 0
    let [m, n] = lines[index++].split(' ').map(Number)
    let menor, maior
    let saida
    let entrada
    let soma 

    while(!(m <= 0 || n <= 0)){
        //Exibir a sequencia do menor ao maior

        saida = ''
        soma = 0
        if(m > n){
            maior = m
            menor = n
        }else{
            maior = n
            menor = m
        }

        while(menor <= maior){
            soma += menor
            saida = saida + `${menor} `
            menor++
        }

        console.log(`${saida}Sum=${soma}`)


        //o somatorio de 

        entrada = lines[index++].split(' ').map(Number)
        m = entrada[0]
        n = entrada[1]
    }

}

main()