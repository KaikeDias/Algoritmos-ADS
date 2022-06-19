import {input} from './io_utils.js'

function main(){
    const numero = Number(lines[0])

    let mensagem = ''
    let qtd = 1
    let cont = 0

    while(qtd < numero){
        cont++
        
        if(cont % 4 === 0){
            mensagem += 'PUM'
            console.log(mensagem)
            mensagem = ''
            qtd++
        }else{
            mensagem += `${cont} `
        }
    }
}

main()