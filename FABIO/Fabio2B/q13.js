import {input} from './io_utils.js'

function main(){
    //entrada
    console.log('RESPONDA AS PERGUNTAS COM "SIM" OU "NAO" ')
    const a = input('Telefonou para vitima? ')
    const b = input('Esteve no local do crime? ')
    const c = input('Mora perto da vitima? ')
    const d = input('Devia para a vitima? ')
    const e = input('Ja trabalhou para a vitima? ')
    
    //saida
    console.log(classificacao(a,b,c,d,e))

}

function quantidade(a,b,c,d,e){
    let cont = 0
    if (a === 'sim'){
        cont++
    }
    if(b === 'sim'){
        cont++
    }
    if(c === 'sim'){
        cont++
    }
    if(d === 'sim'){
        cont++
    }
    if(e === 'sim'){
        cont++
    }
    return cont
}

function classificacao(a,b,c,d,e){
    const qt = quantidade(a,b,c,d,e)
    if (qt === 5){
        return 'Assasino'
    }else if(qt === 3 || qt === 4){
        return 'Cumplice'
    }else if(qt === 2){
        return 'Suspeito'
    }else{
        return 'Inocente'
    }
}

main()