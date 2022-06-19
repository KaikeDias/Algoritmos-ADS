function main(){
    const input = 'Every developer likes to mix kubernetes and javascript'.split(' ')    

    const frase_abreviada = abreviar(input)
    
    console.log(frase_abreviada)
}

function abreviar(vetor){
    let abreviacao = ''
    let ultimo_caractere
    
    for(let palavra of vetor){
        if(quatro_letras(palavra)){
            ultimo_caractere = palavra.length-1
            abreviacao += `${palavra[0]}${palavra.length-2}${palavra[ultimo_caractere]} `
        }else{
            abreviacao += `${palavra} `
        }
    }

    return abreviacao
}

function quatro_letras(palavra){
    if(palavra.length >= 4){
        return true
    }else{
        return false
    }
}

main()