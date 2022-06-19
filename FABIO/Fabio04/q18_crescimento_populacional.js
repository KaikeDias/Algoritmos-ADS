function main(){
    let cidade_A = 200000
    let cidade_B = 800000
    let anos = 0 
    
    while(cidade_B > cidade_A){
        cidade_A += crescimento_A(cidade_A)
        cidade_B += crescimento_B(cidade_B)
        anos++
    }

    console.log(`Vai demorar ${anos} anos para a população da cidade A ficar maior que a população da cidade B`)

}

function crescimento_A(cidade_A){
    return cidade_A * 0.035
}

function crescimento_B(cidade_B){
    return cidade_B * 0.0135
}

main()