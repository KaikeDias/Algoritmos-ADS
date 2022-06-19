import {input} from './io_utils.js'
import {eh_vogal} from './strings_utils.js'

function main(){
    const texto = input('Texto: ')

    const [texto_criptografado, texto_descriptografar, armazenar_vogais] = criptografar(texto)
    const descriptografado = descritografar(texto_descriptografar, armazenar_vogais)

    console.log(`Texto criptografado: ${texto_criptografado}`)
    console.log(`Texto descriptografado: ${descriptografado}`)
}

function criptografar(texto){
    let texto_criptografado = ''
    let texto_descriptografar = ''
    let armazenar_vogais = ''

    for(let i in texto){
        if(!eh_vogal(texto[i])){
            texto_criptografado += texto[i]
            texto_descriptografar += texto[i]
        }else{
            texto_descriptografar += '*'
            armazenar_vogais += texto[i]
        }
    }

    return [texto_criptografado,texto_descriptografar, armazenar_vogais]

}

function descritografar(texto_descriptografar, armazenar_vogais){
    let descriptografado = ''
    let posicao = 0

    for(let i in texto_descriptografar){
        if(texto_descriptografar[i] !== '*'){
            descriptografado += texto_descriptografar[i]
        }else{
            descriptografado += armazenar_vogais[posicao]
            posicao++
        }
    }

    return descriptografado
}
main()