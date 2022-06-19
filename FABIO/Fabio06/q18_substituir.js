import { input } from "./io_utils.js"

function main(){
    const texto = input('Texto: ').split(' ')
    const parte = input('Parte que deseja substituir: ')
    const substituta = input('Substituta: ')

    const novo_texto = substituir(texto,parte,substituta)

    console.log(novo_texto)
}

function substituir(texto,parte,substituta){
    let novo_texto = ''

    for(let i in texto){
        if(texto[i] === parte){
            novo_texto += `${substituta} `
        }else{
            novo_texto += `${texto[i]} `
        }
    }

    return novo_texto

}

main()