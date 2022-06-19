import {input} from './io_utils.js'

function main(){
    const N = Number(input('Numero de eleitores: '))
    let voto 
    let A = 0
    let B = 0
    let C = 0
    let nulo = 0
    let branco = 0
    let cont = 0
    
    while(cont < N){
        voto = Number(input('Informe o seu voto: '))

        if(voto === 1){
            A++
            cont++
        }else if(voto === 2){
            B++
            cont++
        }else if(voto === 3){
            C++
            cont++
        }else if(voto === 9){
            branco++
            cont++
        }else if(voto === 0){
            nulo++
            cont++
        }else{
            console.log('Voto inválido')
        }
    }

    console.log(`Total de votos candidato A: ${A}`)
    console.log(`Total de votos candidato B: ${B}`)
    console.log(`Total de votos candidato C: ${C}`)
    console.log(`Total de votos em branco: ${branco}`)
    console.log(`Total de votos nulos: ${nulo}`)
    vencedor(A,B,C)


}

function vencedor(A,B,C){
    if(A > B && A > C){
        console.log('O candidato A é o vencedor')
    }else if(B > A && B > C){
        console.log('O candidato B é o vencedor')
    }else if(C > B && C > A){
        console.log('O candidato C é o vencedor')
    }else{
        console.log('Não houve vencedor')
    }
}

main()