// no site ele nao usa um vetor na entrada e usa so o 6, mas como é 
// para ser uma questao de vetor eu adicionei o 4 para nao ser um vetor com só um elemento

function main(){
    const input = [4, 6]

    let resultado
    for(let numero of input){
        resultado = fatorial(numero)
        console.log(resultado)
    }

}

function fatorial(numero){
    let calculo = 1

    for(let i = numero; i > 0; i--){
        calculo *= i
    }

    return calculo
}

main()