import {input} from './io_utils.js'

function main(){
    let idade = 1
    let opiniao

    let cont_idade_otimo = 0
    let cont_otimo = 0
    let cont_regular = 0
    let cont_bom = 0
    let cont = 0

    while(idade !== -1){
        idade = Number(input('Qual a sua idade: '))
        if(idade === -1){
            break
        }
        opiniao = Number(input('Sua opiniao (1=ótimo, 2=bom, 3=regular, 4=péssimo): '))

        if(opiniao === 1){
            cont_idade_otimo += idade
            cont_otimo++
        }else if(opiniao === 3){
            cont_regular++
        }else if(opiniao === 2){
            cont_bom++
        }
        cont++
    }  

    const media_idade = media(cont_otimo,cont_idade_otimo)
    const percentual_bom = (cont_bom / cont) * 100

    console.log(`Média das idades das pessoas que responderam ótimo: ${media_idade}`)
    console.log(`Quantidade de pessoas que respondeu regular: ${cont_regular}`)
    console.log(`Percentual de pessoas que respondeu bom entre os entrevistados: ${percentual_bom}%`)



}

function media(cont_otimo,cont_idade_otimo){
    const med =  cont_idade_otimo/cont_otimo
    return med

}

main()