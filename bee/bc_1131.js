import {input} from './io_utils.js'

function main(){
    let index = 0
    let grenal = 1
    let grenais = 0
    let vit_inter = 0
    let vit_gremio = 0
    let empate = 0
    let gols = 0
    let inter = 0
    let gremio = 0

    while(grenal === 1 && grenal !== 2){
        gols = input('Gols: ').split(' ').map(Number)
        inter = gols[0]
        gremio = gols[1]
        if(inter > gremio){
            vit_inter++
        }else if(inter < gremio){
            vit_gremio++
        }else{
            empate++
        }
        grenal = Number(input('Novo grenal (1-sim 2- nao)'))
        grenais++
    }

    console.log(`${grenais} grenais`)
    console.log(`Inter:${vit_inter}`)
    console.log(`Gremio:${vit_gremio}`)
    console.log(`Empates:${empate}`)
    resultado(vit_inter,vit_gremio,inter,gremio)
    
}

function resultado(vit_inter,vit_gremio,inter,gremio){
    if(vit_inter > vit_gremio){
        console.log('Inter venceu mais')
    }else if(inter < gremio){
        console.log('Gremio venceu mais')
    }else{
        console.log('Nao houve vencedor')
    }
}

main()