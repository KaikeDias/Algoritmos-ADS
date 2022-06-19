import {input} from './io_utils.js'

function main(){
    let canal = 1
    let audiencia
    let total = 0
    let canal2 = 0
    let canal4 = 0
    let canal5 = 0
    let canal7 = 0
    let canal10 = 0 

    while(canal !== 0){
        canal = Number(input('Canal: '))
        if(canal === 0){
            break
        }
        audiencia = Number(input('Numero de pessoas assistindo: '))
        total += audiencia

        if(canal === 2){
            canal2 += audiencia
        }else if(canal === 4){
            canal4 += audiencia
        }else if(canal === 5){
            canal5 += audiencia
        }else if(canal === 7){
            canal7 += audiencia
        }else if(canal === 10){
            canal10 += audiencia
        }   
    }

    const perc_c2 = (canal2 / total) * 100  
    const perc_c4 = (canal4 / total) * 100  
    const perc_c5 = (canal5 / total) * 100  
    const perc_c7 = (canal7 / total) * 100  
    const perc_c10 = (canal10 / total) * 100 
    
    console.log(`Audiencia total: ${total}`)
    console.log(`Percentual canal 2: ${perc_c2.toFixed(2)}`)
    console.log(`Percentual canal 4: ${perc_c4.toFixed(2)}`)
    console.log(`Percentual canal 5: ${perc_c5.toFixed(2)}`)
    console.log(`Percentual canal 7: ${perc_c7.toFixed(2)}`)
    console.log(`Percentual canal 10: ${perc_c10.toFixed(2)}`)


}

main()