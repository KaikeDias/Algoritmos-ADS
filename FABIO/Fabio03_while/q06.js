function main(){
    let numero = 1
    let cont = 1
    let multiplicacao 
    
    console.log('-----TABUADA DO 1 AO 10-----')
    while(numero <= 10){
        multiplicacao = numero * cont
        console.log(`${numero} x ${cont} = ${multiplicacao}`)
        cont++
        if(cont > 10){
            console.log('----------------------------')
            numero++
            cont = 1
        }
    }

}


main()