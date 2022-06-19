import {input} from './io_utils.js'

function main(){
    const senha = input('Qual será a senha: ')
    console.clear()

    const asteriscos = ocultar_senha(senha)

    console.log(asteriscos)

    let tentativa = input('Senha: ')

    while(tentativa !== senha){
        console.log('SENHA INCORRETA!')
        tentativa = input('Senha: ')
    }

    console.log(`CORRETO!\nA senha era '${senha}'`)

}



function ocultar_senha(senha){
    let asteriscos = '' 
    for(let i = 0; i < senha.length; i++){
        asteriscos += '*'
    }

    return asteriscos
}

main()