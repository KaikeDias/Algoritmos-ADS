import {input} from './io_utils.js'

function main(){
    let cont = 0
    let sexo 
    let idade
    let estado_civil
    let mulheres = 0
    let homens = 0
    let idade_homens = 0
    let idade_mulheres = 0
    let homens_solteiros = 0
    let mulheres_solteiras = 0
    let divorciadas30 = 0

    while (cont < 5){
        sexo = Number(input('Sexo (1=Masculino, 2=Feminino): '))
        idade = Number(input('Idade: '))
        estado_civil = Number(input('Estado civil (1=Casado, 2=Solteiro, 3=Divorciado, 4=Viúvo): '))

        if(sexo === 1){
            homens++
            idade_homens += idade
            if(estado_civil === 2){
                homens_solteiros++
            }
        }else if(sexo === 2){
            mulheres++
            idade_mulheres += idade
            if(estado_civil === 2){
                mulheres_solteiras++
            }else if(estado_civil === 3 && idade > 30){
                divorciadas30++
            }
        }
        cont++
    }

    const perc_solteiros = (homens_solteiros/homens) * 100
    const perc_solteiras = (mulheres_solteiras/mulheres) * 100
    const media_mulheres = idade_mulheres/mulheres
    const media_homens = idade_homens/homens

    console.log(`Média de idade das mulheres: ${media_mulheres}`)
    console.log(`Média de idade dos homens: ${media_homens}`)
    console.log(`O percentual de homens solteiros: ${perc_solteiros.toFixed(2)}%`)
    console.log(`O percentual de mulheres solteiras: ${perc_solteiras.toFixed(2)}%`)
    console.log(`A quantidade de mulheres divorciadas acima de 30 anos: ${divorciadas30}`)


}

main()