import {input} from './io_utils.js'

function main(){
    const numero = Number(input('Numero: '))
    if(numero > 999){
        console.log('Numero invalido')
    }else{
        romanos(numero)
    }
}

function romanos(numero){
    let centenas = Math.trunc(numero/100)
    let dezenas = Math.trunc((numero%100)/10)
    let unidades = numero % 10

    const unidade_romano = unidade(unidades)
    const dezena_romano = dezena(dezenas)
    const centena_romano = centena(centenas)
    
    console.log(`${centena_romano}${dezena_romano}${unidade_romano}`)
}

function unidade(unidades){
    let resultado = ''

    if(unidades <= 3){
        for(let i = 0; i < unidades; i++){
            resultado += 'I'
        }
    }else if(unidades === 4){
        resultado = 'IV'
    }else if(unidades === 5){
        resultado = 'V'
    }else if(unidades > 5 && unidades < 9){
        resultado = 'V'
        for(let i = 0; i < unidades - 5; i++){
            resultado += 'I'
        }
    }else if(unidades === 9){
        resultado = 'IX'
    }

    return resultado
}

function dezena(dezenas){
    let resultado = ''

    if(dezenas <= 3){
        for(let i = 0; i < dezenas; i++){
            resultado += 'X'
        }
    }else if(dezenas === 4){
        resultado = 'XL'
    }else if(dezenas === 5){
        resultado = 'L'
    }else if(dezenas > 5 && dezenas < 9){
        resultado = 'L'
        for(let i = 0; i < dezenas - 5; i++){
            resultado += 'X'
        }
    }else if(dezenas === 90){
        resultado = 'XC'
    }

    return resultado
}

function centena(centenas){
    let resultado = ''

    if(centenas <= 3){
        for(let i = 0; i < centenas; i++){
            resultado += 'C'
        }
    }else if(centenas === 4){
        resultado = 'CD'
    }else if(centenas === 5){
        resultado = 'D'
    }else if(centenas > 5 && centenas < 9){
        resultado = 'D'
        for(let i = 0; i < centenas - 5; i++){
            resultado += 'C'
        }
    }else if(centenas === 9){
        resultado = 'CM'
    }

    return resultado
}

main()