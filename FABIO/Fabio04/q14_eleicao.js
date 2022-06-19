import {input} from './io_utils.js'

function main(){
    let voto = 1
    let eleitores = 0
    let serra = 0
    let dilma = 0
    let ciro = 0
    let indeciso = 0
    let outro = 0
    let nulo = 0

    while(voto !== -1){
        voto = Number(input('Vote: '))

        if(voto === 45){
            serra++
            eleitores++
        }else if(voto === 13){
            dilma++
            eleitores++
        }else if(voto === 23){
            ciro++
            eleitores++
        }else if(voto === 99){
            indeciso++
            eleitores++
        }else if(voto === 98){
            outro++
            eleitores++
        }else if(voto === 0){
            nulo++
            eleitores++
        }
    }

    const perc_dilma = (dilma / eleitores) * 100
    const perc_serra = (serra / eleitores) * 100
    const perc_ciro = (ciro/eleitores) * 100
    const perc_outro = (outro/eleitores) * 100
    const perc_indeciso = (indeciso/eleitores) * 100
    const perc_nulo = (nulo/eleitores) * 100
    let segundo_turno

    if(perc_dilma > 50 || perc_serra > 50 || perc_ciro > 50){
        segundo_turno = 'Não existe possibilidade de ter segundo turno'
    }else{
        segundo_turno = 'Existe possibilidade de ter segundo turno'
    }

    console.log(`Porcentagem Serra: ${perc_serra.toFixed(2)}%`)
    console.log(`Porcentagem Dilma: ${perc_dilma.toFixed(2)}%`)
    console.log(`Porcentagem Ciro: ${perc_ciro.toFixed(2)}%`)
    console.log(`Porcentagem outros: ${perc_outro.toFixed(2)}%`)
    console.log(`Porcentagem indecisos: ${perc_indeciso.toFixed(2)}%`)
    console.log(`Porcentagem nulos/brancos: ${perc_nulo.toFixed(2)}%`)
    console.log(`Total de eleitores: ${eleitores}`)
    console.log(segundo_turno)

}

main()