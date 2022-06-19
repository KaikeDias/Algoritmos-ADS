import {input} from './io_utils.js'

function main(){
    const A = Number(input('A: '))
    const B = Number(input('B: '))

    let mmc = 1

    while(!(eh_multiplo(mmc,A) && eh_multiplo(mmc,B))){
        mmc++
    }

    console.log(`O mmc de ${A} e ${B} é ${mmc}`)
}

function eh_multiplo(mmc,valor){
    return mmc % valor === 0
}

main()