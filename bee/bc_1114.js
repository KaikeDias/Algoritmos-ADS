import {input} from './io_utils.js'

function main(){
    const senha_correta = 2002
    
    autenticador(senha_correta)
}

function autenticador(senha_correta){
    let senha = 0
    
    while(senha !== senha_correta){
        senha = Number(input('Digite uma senha de numeros: '))
        if(senha === senha_correta){
            console.log('Acesso Permitido')
        }else{
            console.log('Senha Inválida')
        }
    }
}

main()