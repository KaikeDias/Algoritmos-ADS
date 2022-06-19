import {input} from '../io_utils.js'

function main(){
    //entrada
    const A = Number(input('A:'))
    const B = Number(input('B:'))
    const C = Number(input('C:'))

    //processamento
   
    const delta = B**2 - 4 * A * C
    
    const raiz1 = ((B*(-1))+Math.sqrt(delta))/(A*2)
    const raiz2 = ((B*(-1))-Math.sqrt(delta))/(A*2)

    //saida
    
    if (delta<0){
        console.log('impossivel calcular')
    }else if (A==0 ){
        console.log('Impossivel calcular')
    }else{
        console.log(`R1 = ${raiz1.toFixed(5)}`)
        console.log(`R2 = ${raiz2.toFixed(5)}`)
    }
    




}
main()