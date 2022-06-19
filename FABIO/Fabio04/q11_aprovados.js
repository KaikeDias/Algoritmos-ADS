import {input} from './io_utils.js'

function main(){
    let matricula = Number(input('Matricula: '))
    let nota1
    let nota2
    let nota3

    if(matricula !== 0){
        nota1 = Number(input('Nota 1: '))
        nota2 = Number(input('Nota 2: '))
        nota3 = Number(input('Nota 3: '))
    }

    
    let aprovados = 0
    let reprovados = 0
    let alunos = 0
    
    if(aprovado(nota1,nota2,nota3)){
        aprovados++
    }else{
        reprovados++
    }
    

    while(matricula !== 0){
        alunos++
        matricula = Number(input('Matricula: '))

        if(matricula === 0){
            break
        }

        if(matricula !== 0){
            nota1 = Number(input('Nota 1: '))
            nota2 = Number(input('Nota 2: '))
            nota3 = Number(input('Nota 3: '))
        }

        if(aprovado(nota1,nota2,nota3)){
            aprovados++
        }else{
            reprovados++
        }

    }

    console.log(`Total de aprovados: ${aprovados}`)
    console.log(`Total de reprovados: ${reprovados}`)
    console.log(`Total de alunos: ${alunos}`)
    

}

function aprovado(n1,n2,n3){
    const media = ((2*n1) + (3*n2) + (5*n3)) / 10
    if(media > 7){
        return true
    }else{
        return false
    }
}

main()