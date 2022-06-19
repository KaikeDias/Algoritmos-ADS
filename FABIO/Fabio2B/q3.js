import {input} from './io_utils.js'

function main(){
    //Entrada
    const letra = input('Digite uma letra minuscula: ')

    //Saída
    if(vogal(letra)){
        console.log('Vogal')
    }else{
        console.log('Consoante')
    }


}

//Processamento
function vogal(letra){
    if(letra === 'a' || letra === 'A' || letra === 'e' || letra === 'E' || letra === 'i' || letra === 'I' || letra === 'o' || letra === 'O' || letra === 'u' || letra === 'U'){
        return true
    }else{
        return false
    }
}

main()