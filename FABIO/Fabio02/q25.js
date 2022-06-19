import {input} from './io_utils.js'

function main(){
    //entrada
    const senha = Number(input('Digite a senha: '))

    //saida
    console.log(permissao(senha))

}

function permissao(senha){
    if (senha === 1234){
        return 'Acesso permitido'
    }else{
        return 'Acesso negado'
    }
}

main()