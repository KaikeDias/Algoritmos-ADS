import {input} from './io_utils.js'

function main(){
    let pts_jogador1 = 0
    let pts_jogador2 = 0

    while(pode_continuar(pts_jogador1,pts_jogador2)){
        let jogador = Number(input('Jogador = '))
        if (jogador === 1){
            pts_jogador1++
        }else if(jogador === 2){
            pts_jogador2++
        }
    }
    
    const winner = vencedor(pts_jogador1,pts_jogador2)

    console.log(winner)
}

function pode_continuar(pts_jogador1,pts_jogador2){
    const diff = Math.abs(pts_jogador2 - pts_jogador1)

    if (pts_jogador1 < 5 && pts_jogador2 < 5){
        return true
    }else if(diff < 2){
        return true
    }else{
        return false
    }
}

function vencedor(pts_jogador1,pts_jogador2){
    let vencedor = 'Vencedor = Jogador'
    
    if(pts_jogador1 > pts_jogador2){
        vencedor = vencedor + ' 1'
    }else{
        vencedor = vencedor + ' 2'
    }
    
    return vencedor
}

main()