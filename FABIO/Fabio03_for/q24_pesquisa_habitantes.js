import {input} from './io_utils.js'

function main(){
    const num_hab = Number(input('Numero de habitantes: '))
    let salario = 0
    let salario_somado = 0
    let num_filhos = 0
    let filhos = 0
    let salario_1000 = 0
    let cont = 0
    
    for(let cont = 0; cont < num_hab; cont++){
        salario = Number(input('Salario: '))
        num_filhos = Number(input('Numero de filhos: '))
        
        filhos += num_filhos
        salario_somado += salario
        
        if(salario <= 1000){
            salario_1000++
        }
    }

    const perc = percentual(salario_1000,num_hab)
    const med_sal = media_salario(salario_somado,num_hab)
    const med_fi = media_filhos(filhos,num_hab)

    console.log(`Media de salario da população: ${med_sal}`)
    console.log(`Média de número de filhos: ${med_fi}`)
    console.log(`Percentual de pessoas com salário de até R$ 1.000,00: ${perc}%`)
    


}

function media_filhos(filhos,habitantes){
    return filhos/habitantes
}

function media_salario(salario,habitantes){
    return salario/habitantes
}

function percentual(salario,habitantes){
    return (salario/habitantes) * 100
}

main()