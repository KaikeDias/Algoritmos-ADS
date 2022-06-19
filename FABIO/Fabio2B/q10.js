import {input} from './io_utils.js'

function main(){
    //entrada
    const notas = input("Digite as nots do aluno: ")
    const [A,B] = notas.split(" ").map(Number) 
    
    //processamento
    const med = media(A,B)
    const conc = conceito(A,B)
    const estado = aprovacao(A,B)
    
    //saida
    console.log(`NOTAS: ${A} e ${B}`)
    console.log(`Media: ${med}`)
    console.log(`Conceito: ${conc}`)
    console.log(`Estado: ${estado}`)

}

function media(n1,n2){
    return (n1+n2)/2
}

function conceito(n1,n2){
    const med = media(n1,n2)
    let valor = 0
    if (med >= 9 && med <= 10){
        valor = 'A'
    }else if(med >= 7.5 && med < 9){
        valor = 'B'
    }else if(med >= 6 && med < 7.5){
        valor = 'C'
    }else if(med >= 4 && med < 6){
        valor = 'D'
    }else if(med < 4){
        valor = 'E'
    }
    return valor
}

function aprovacao(n1,n2){
    const conc = conceito(n1,n2)
    if (conc === 'A' || conc === 'B' || conc === 'C'){
        return 'Aprovado'
    }else if(conc === 'D' || conc === 'E'){
        return 'Reprovado'
    }
}

main()