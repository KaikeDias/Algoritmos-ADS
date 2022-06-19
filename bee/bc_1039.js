import {input} from './io_utils.js'

function main(){
    const notas = input('Digite as notas do aluno: ').split(' ').map(Number)
    const n1 = notas[0]
    const n2 = notas[1]
    const n3 = notas[2]
    const n4 = notas[3]

    const med = media(n1,n2,n3,n4)
    
    console.log(`Media: ${med.toFixed(1)}`)
    
    if (med>=7){
        console.log('Aluno aprovado.')
    }else if(med >= 5 && med <= 6.9){
        console.log('Aluno em exame.')
        const exame = Number(input('Nota do exame: '))
        const media_final = (exame + med)/2   
        if(media_final >= 5){
            console.log(`Nota do exame: ${exame.toFixed(1)}`)
            console.log('Aluno aprovado.')
            console.log(`Media final: ${media_final.toFixed(1)}`)
        }else{
            console.log(`Nota do exame: ${exame.toFixed(1)}`)
            console.log('Aluno reprovado.')
            console.log(`Media final: ${media_final.toFixed(1)}`)
        }
    }else{
        console.log('Aluno reprovado')
    }


}

function media(n1,n2,n3,n4){
    const media = (n1*2 + n2*3 + n3*4 + n4)/(2+3+4+1)
    return media
}



main()