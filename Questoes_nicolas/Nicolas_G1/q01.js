import {input,print} from './io_utils.js'

function main(){
    //Entrada
    const idade = Number(input('Idade: '))
    const fc_atual = Number(input('FC atual: '))

    //Saída
    zona(idade,fc_atual)
    print(`Limite Atividade moderada: ${limite_AM(idade)}`)
    print(`Limite Controle de peso : ${limite_CP(idade)}`)
    print(`Limite Aerobica: ${limite_AE(idade)}`)
    print(`Limite Anaerobica: ${limite_AN(idade)}`)
    print(`Limite maximo: ${frequencia_max(idade)}`)

    
}

//Processamento

function limite_AM(idade){
    return frequencia_max(idade) * 0.599999999999999999
}

function limite_CP(idade){
    return frequencia_max(idade) * 0.699999999999
}

function limite_AE(idade){
    return frequencia_max(idade) * 0.799999999999
}

function limite_AN(idade){
    return frequencia_max(idade) * 0.899999999999
}

function zona(idade,fc_atual){
   const percentual = percent(idade,fc_atual)

   if(percentual >= 50 && percentual < 60){
       print('Atividade moderada')
   }else if(percentual >= 60 && percentual < 70){
       print('Controle de peso')
   }else if(percentual >= 70 && percentual < 80){
        print('Aeróbica')
   }else if(percentual >= 80 && percentual < 90){
       print('Anaeróbica')
   }else if(percentual >= 90 && percentual <= 100){
       print('Esforço máximo')
   }
}

function percent(idade,fc_atual){
    const max = frequencia_max(idade)

    return ((fc_atual/max) * 100).toFixed(3)
}

function frequencia_max(idade){
    return 220 - idade
}

main()