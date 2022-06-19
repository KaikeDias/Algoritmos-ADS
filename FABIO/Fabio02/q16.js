import {input} from './io_utils.js'

function main(){
    //entrada
    const nota1 = Number(input('Primeira nota: '))
    const nota2 = Number(input('Segunda nota: '))

    //saida
    if (primeira_media(nota1,nota2) >= 7){
        console.log('Aprovado')
    }else if(primeira_media(nota1,nota2) < 7){
        const nota_final = Number(input('Nota final: '))

        if(media_final(nota1,nota2,nota_final) >= 5 ){
            console.log('Aprovado')
        }else{
            console.log('Reprovado')
        }
        
    }else{
        console.log('Reprovado')
    }
    
}

function primeira_media(n1,n2){
    const media = (n1 + n2) / 24

    return media
}

function media_final(n1,n2,n3){
    const media_final = (n1 + n2 + n3)/3

    return media_final
}

main()