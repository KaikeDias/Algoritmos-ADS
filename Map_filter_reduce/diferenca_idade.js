function main(){
    const input = [13, 56, 45, 67, 65]

    const [maior, menor, diferenca] = diferenca_idades(input)

    console.log([menor,maior,diferenca])
}

function diferenca_idades(vetor){
    let maior = vetor[0]
    let menor = vetor[0]

    for(let numero of vetor){
        if(numero > maior){
            maior = numero
        }else if(numero < menor){
            menor = numero
        }
    }

    const diferenca = maior - menor

    return [maior, menor, diferenca]
}

main()